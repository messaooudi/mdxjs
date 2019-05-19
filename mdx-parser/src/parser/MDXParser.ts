import { Parser, TokenTypeDictionary } from "chevrotain";
import { tupleTypeAnnotation, memberExpression } from "@babel/types";

class MDXParser extends Parser {
  tokens: TokenTypeDictionary;
  constructor(tokens: TokenTypeDictionary) {
    super(tokens);
    this.tokens = tokens;

    this.selectStatement();
    this.selectClause();
    this.queryAxisClause();
    this.setExpression();
    this.tupleOrMemberExpression();
    this.tupleExpression();
    this.memberExpression();
    this.dimensionPropertyListClause();
    
    this.performSelfAnalysis();
  }

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
  selectStatement() {
    this.RULE("selectStatement", () => {
      this.SUBRULE(this.selectClause);
      // $.SUBRULE($.fromClause);
      // $.OPTION(() => {
      //   $.SUBRULE($.whereClause);
      // });
    });
  }

  /**
   * <SELECT WITH clause> ::=
   *      ( CELL CALCULATION <CREATE CELL CALCULATION body clause> )
   *    | ( [ CALCULATED ] MEMBER <CREATE MEMBER body clause>)
   *    | ( SET <CREATE SET body clause>)
   *    | ( MEASURE = <measure body clause> )
   */
  withClause() {}

  /**
   * SELECT
   *      [ *
   *     | ( <SELECT query axis clause>
   *                   [ , <SELECT query axis clause>,...n ]
   *             )
   *             ]
   */
  selectClause() {
    this.RULE("selectClause", () => {
      this.CONSUME(this.tokens.SELECT);
      this.AT_LEAST_ONE_SEP({
        SEP: this.tokens.COMMA,
        DEF: () => {
          this.SUBRULE(this.queryAxisClause);
        }
      });
    });
  }

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
  queryAxisClause() {
    this.RULE("queryAxisClause", () => {
      this.OPTION(() => {
        this.CONSUME(this.tokens.NON);
        this.CONSUME(this.tokens.EMPTY);
      });
      this.SUBRULE(this.setExpression);
      this.OPTION1(() => {
        this.SUBRULE(this.dimensionPropertyListClause);
      });
      this.CONSUME(this.tokens.ON);
      this.OR([
        { ALT: () => this.CONSUME(this.tokens.DIGIT) },
        {
          ALT: () => {
            this.CONSUME(this.tokens.AXIS);
            this.CONSUME1(this.tokens.LEFT_PARENTHESIS);
            this.CONSUME2(this.tokens.DIGIT);
            this.CONSUME3(this.tokens.RIGHT_PARENTHESIS);
          }
        },
        { ALT: () => this.CONSUME(this.tokens.COLUMNS) },
        { ALT: () => this.CONSUME(this.tokens.ROWS) },
        { ALT: () => this.CONSUME(this.tokens.PAGES) },
        { ALT: () => this.CONSUME(this.tokens.SECTIONS) },
        { ALT: () => this.CONSUME(this.tokens.CHAPTERS) }
      ]);
    });
  }

  /**
   * { [ { Tuple_expression | Member_expression } [ , { Tuple_expression | Member_expression } ] ... ] }
   *  curly braces are optional if only one Tuple_expression|Member_expression
   */
  setExpression() {
    this.RULE("setExpression", () => {
      this.OR([
        {
          ALT: () => this.SUBRULE(this.tupleOrMemberExpression)
        },
        {
          ALT: () => {
            this.CONSUME(this.tokens.LEFT_BRACE);
            this.AT_LEAST_ONE_SEP({
              SEP: this.tokens.COMMA,
              DEF: () => this.SUBRULE1(this.tupleOrMemberExpression)
            });
            this.CONSUME(this.tokens.RIGHT_BRACE);
          }
        }
      ]);
    });
  }

  /**
   * Tuple_expression | Member_expression
   */
  tupleOrMemberExpression() {
    this.RULE("tupleOrMemberExpression", () => {
      this.OR([
        { ALT: () => this.SUBRULE(this.tupleExpression) },
        { ALT: () => this.SUBRULE(this.memberExpression) }
      ]);
    });
  }

  /**
   * (Member_expression [ ,Member_expression ... ] )
   */
  tupleExpression() {
    this.RULE("tupleExpression", () => {
      this.CONSUME(this.tokens.LEFT_PARENTHESIS);
      this.AT_LEAST_ONE_SEP({
        SEP: this.tokens.COMMA,
        DEF: () => {
          this.SUBRULE(this.memberExpression);
        }
      });
      this.CONSUME(this.tokens.RIGHT_PARENTHESIS);
    });
  }

  /**
   * A member expression contains a member identifier, a member function, or an expression that can be converted to a member.
   */
  memberExpression() {
    this.RULE("memberExpression", () => {
      this.OR([
        { ALT: () => this.CONSUME(this.tokens.REGULAR_IDENTIFIER) },
        {
          ALT: () =>
            this.AT_LEAST_ONE_SEP({
              SEP: this.tokens.DOT,
              DEF: () => this.CONSUME(this.tokens.DELIMITED_IDENTIFIER)
            })
          // TODO : & symbol missing ex : [Date].[Calendar].[Calendar Quarter].&[2004]&[1]
        }
      ]);
    });
  }

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
  dimensionPropertyListClause() {
    this.RULE("dimensionPropertyListClause", () => {
      this.OPTION(() => {
        this.CONSUME(this.tokens.DIMENSION);
      });
      this.CONSUME(this.tokens.PROPERTIES);
      // TODO : complete the rule
    });
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
