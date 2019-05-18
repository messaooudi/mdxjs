import { Parser, TokenTypeDictionary } from "chevrotain";

class MDXParser extends Parser {
  constructor(tokens : TokenTypeDictionary) {
    super(tokens);
    const $ = this;

    $.RULE("selectStatement", () => {
      $.SUBRULE($.selectClause);
    //   $.SUBRULE($.fromClause);
    //   $.OPTION(() => {
    //     $.SUBRULE($.whereClause);
    //   });
    });

    $.RULE("selectClause", () => {
       $.CONSUME(tokens.SELECT);
    //   $.AT_LEAST_ONE_SEP({
    //     SEP: tokens.symbols.COMMA,
    //     DEF: () => {
    //       $.CONSUME(Identifier);
    //     }
    //   });
    });

    // $.RULE("queryAxisClause", () => {
    //   $.SUBRULE($.setExpression);
    //   $.OPTION(() => {
    //     $.SUBRULE($.dimensionPropertyListClause);
    //   });
    //   $.OPTION(() => {
    //     $.SUBRULE($.havingClause);
    //   });
    //   $.CONSUME(tokens.reserved_words.ON);
    //   $.OR([
    //     { ALT: () => $.CONSUME(tokens.numbers.DIGIT) },
    //     { ALT: () => $.CONSUME(tokens.reserved_words.COLUMNS) },
    //     { ALT: () => $.CONSUME(tokens.reserved_words.ROWS) },
    //     { ALT: () => $.CONSUME(tokens.reserved_words.PAGES) },
    //     { ALT: () => $.CONSUME(tokens.reserved_words.SECTIONS) },
    //     { ALT: () => $.CONSUME(tokens.reserved_words.CHAPTERS) }
    //     // TODO : add AXIS( Integer_Expression )
    //   ]);
    // });

    // $.RULE("setExpression", () => {
    //   $.CONSUME(tokens.symbols.LEFT_BRACE);
    //   $.AT_LEAST_ONE_SEP({
    //     SEP: tokens.symbols.COMMA,
    //     DEF: () => {
    //       $.OR([
    //         { ALT: () => $.SUBRULE($.tupleExpression) },
    //         { ALT: () => $.SUBRULE($.memberExpression) }
    //       ]);
    //     }
    //   });
    //   $.CONSUME(tokens.symbols.RIGHT_BRACE);
    // });

    // $.RULE("tupleExpression", () => {
    //   $.CONSUME(tokens.symbols.LEFT_PARENTHESIS);
    //   $.AT_LEAST_ONE_SEP({
    //     SEP: tokens.symbols.COMMA,
    //     DEF: () => {
    //       $.SUBRULE($.memberExpression);
    //     }
    //   });
    //   $.CONSUME(tokens.symbols.RIGHT_PARENTHESIS);
    // });

    // $.RULE("memberExpression", () => {
    //   $.OR([
    //     { ALT: () => $.CONSUME(tokens.identifiers.REGULAR_IDENTIFIER) },
    //     {
    //       ALT: () =>
    //         $.AT_LEAST_ONE_SEP({
    //           SEP: tokens.symbols.DOT,
    //           DEF: () => $.CONSUME(tokens.identifiers.DELIMITED_IDENTIFIER)
    //         })
    //         // TODO : & symbol missing ex : [Date].[Calendar].[Calendar Quarter].&[2004]&[1] 
    //     }
    //   ]);
    // });

    // $.RULE("dimensionPropertyListClause", () => {});

    // $.RULE("havingClause", () => {});

    this.performSelfAnalysis();
  }
}

export {MDXParser};

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
 */
