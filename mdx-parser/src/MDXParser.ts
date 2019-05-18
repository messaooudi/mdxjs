import { Parser, TokenTypeDictionary } from "chevrotain";

class MDXParser extends Parser {
  constructor(tokens: TokenTypeDictionary) {
    super(tokens);
    const $ = this;

    /**
     * [ WITH <SELECT WITH clause>
     *    [ , <SELECT WITH clause>...n ]
     * ]
     * SELECT
     *      [ *
     *     | ( <SELECT query axis clause>
     *                   [ , <SELECT query axis clause>,...n ]
     *             )
     *             ]
     * FROM
     *    <SELECT subcube clause>
     *       [ <SELECT slicer axis clause> ]
     *       [ <SELECT cell property list clause> ]
     */
    $.RULE("selectStatement", () => {
      $.SUBRULE($.selectClause);
      // $.SUBRULE($.fromClause);
      // $.OPTION(() => {
      //   $.SUBRULE($.whereClause);
      // });
    });

    /**
     * <SELECT WITH clause> ::=  
     *      ( CELL CALCULATION <CREATE CELL CALCULATION body clause> )   
     *    | ( [ CALCULATED ] MEMBER <CREATE MEMBER body clause>)   
     *    | ( SET <CREATE SET body clause>)  
     *    | ( MEASURE = <measure body clause> )  
     */
    $.RULE("withClause",()=>{
      
    })

    /**
     * SELECT
     *      [ *
     *     | ( <SELECT query axis clause>
     *                   [ , <SELECT query axis clause>,...n ]
     *             )
     *             ]
     */
    $.RULE("selectClause", () => {
      $.CONSUME(tokens.SELECT);
      $.AT_LEAST_ONE_SEP({
        SEP: tokens.COMMA,
        DEF: () => {
          $.SUBRULE($.queryAxisClause);
        }
      });
    });

    /**
     * <SELECT query axis clause> ::=
     *    [ NON EMPTY ] Set_Expression
     *    [ <SELECT dimension property list clause> ]
     *       ON
     *             Integer_Expression
     *        | AXIS(Integer)
     *        | COLUMNS
     *        | ROWS
     *        | PAGES
     *        | SECTIONS
     *        | CHAPTERS
     */
    $.RULE("queryAxisClause", () => {
      $.OPTION(()=>{
        $.CONSUME(tokens.NON)
        $.CONSUME(tokens.EMPTY)
      })
      $.SUBRULE($.setExpression);
      $.OPTION1(() => {
        $.SUBRULE($.dimensionPropertyListClause);
      });
      $.CONSUME(tokens.ON);
      $.OR([
        { ALT: () => $.CONSUME(tokens.DIGIT) },
        {
          ALT: () => {
            $.CONSUME(tokens.AXIS);
            $.CONSUME1(tokens.LEFT_PARENTHESIS);
            $.CONSUME2(tokens.DIGIT);
            $.CONSUME3(tokens.RIGHT_PARENTHESIS);
          }
        },
        { ALT: () => $.CONSUME(tokens.COLUMNS) },
        { ALT: () => $.CONSUME(tokens.ROWS) },
        { ALT: () => $.CONSUME(tokens.PAGES) },
        { ALT: () => $.CONSUME(tokens.SECTIONS) },
        { ALT: () => $.CONSUME(tokens.CHAPTERS) }
      ]);
    });

    /**
     * { [ { Tuple_expression | Member_expression } [ , { Tuple_expression | Member_expression } ] ... ] }
     *  curly braces are optional if only one Tuple_expression|Member_expression 
     */
    $.RULE("setExpression", () => {
      $.OR([
        {
          ALT: () => $.SUBRULE($.tupleOrMemberExpression)
        },
        {
          ALT : ()=>{
            $.CONSUME(tokens.LEFT_BRACE);
            $.AT_LEAST_ONE_SEP({
              SEP: tokens.COMMA,
              DEF: () => $.SUBRULE1($.tupleOrMemberExpression)
            });
            $.CONSUME(tokens.RIGHT_BRACE);
          }
        }
      ]);
    });

    /**
     * Tuple_expression | Member_expression
     */
    $.RULE("tupleOrMemberExpression",()=>{
      $.OR([
        { ALT: () => $.SUBRULE($.tupleExpression) },
        { ALT: () => $.SUBRULE($.memberExpression) }
      ]);
    })

    /**
     * (Member_expression [ ,Member_expression ... ] )
     */
    $.RULE("tupleExpression", () => {
      $.CONSUME(tokens.LEFT_PARENTHESIS);
      $.AT_LEAST_ONE_SEP({
        SEP: tokens.COMMA,
        DEF: () => {
          $.SUBRULE($.memberExpression);
        }
      });
      $.CONSUME(tokens.RIGHT_PARENTHESIS);
    });

    /**
     * A member expression contains a member identifier, a member function, or an expression that can be converted to a member.
     */
    $.RULE("memberExpression", () => {
      $.OR([
        { ALT: () => $.CONSUME(tokens.REGULAR_IDENTIFIER) },
        {
          ALT: () =>
            $.AT_LEAST_ONE_SEP({
              SEP: tokens.DOT,
              DEF: () => $.CONSUME(tokens.DELIMITED_IDENTIFIER)
            })
          // TODO : & symbol missing ex : [Date].[Calendar].[Calendar Quarter].&[2004]&[1]
        }
      ]);
    });

    /**
     * <SELECT dimension property list clause> ::=  
     *    [DIMENSION] PROPERTIES   
     *       (DimensionProperty_Name   
     *          [,DimensionProperty_Name,...n ] )   
     *     | (LevelProperty_Name   
     *          [, LevelProperty_Name,...n ] )   
     *     | (MemberProperty_Name   
     *          [, MemberProperty_Name,...n ] )  
     */
    $.RULE("dimensionPropertyListClause", () => {
      $.OPTION(()=>{
        $.CONSUME(tokens.DIMENSION)
      })
      $.CONSUME(tokens.PROPERTIES)
      // TODO : complete the rule
    });


    this.performSelfAnalysis();
  }
}

export { MDXParser };

/**
 * Member Expressions : https://docs.microsoft.com/en-us/sql/mdx/using-member-expressions?view=sql-server-2017
 * A member expression contains a member identifier, a member function, or an expression that can be converted to a member.
 *
 * Tuple Expressions : https://docs.microsoft.com/en-us/sql/mdx/using-tuple-expressions?view=sql-server-2017
 * (Member_expression [ ,Member_expression ... ] )
 *
 * Set Expression : https://docs.microsoft.com/en-us/sql/mdx/using-set-expressions?view=sql-server-2017
 * { [ { Tuple_expression | Member_expression } [ , { Tuple_expression | Member_expression } ] ... ] }
 *
 * Query Axis Syntax : https://docs.microsoft.com/en-us/sql/analysis-services/multidimensional-models/mdx/mdx-query-and-slicer-axes-specify-the-contents-of-a-query-axis?view=sql-server-2017
 * <SELECT query axis clause> ::=
 * [ NON EMPTY ] Set_Expression [ <SELECT dimension property list clause> ] [<HAVING clause>]
 *  ON {
 *     Integer_Expression |
 *     AXIS( Integer_Expression ) |
 *     {COLUMNS | ROWS | PAGES | SECTIONS | CHAPTERS}
 *     }
 * MDX Data Manipulation Statements  : https://docs.microsoft.com/en-us/sql/mdx/mdx-data-manipulation-statements-mdx?view=sql-server-2017
 */
