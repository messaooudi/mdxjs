import { Lexer, ITokenConfig, TokenType, createToken } from "chevrotain";
import white_space from "./white_space"
import comments from "./comments"
import operators from "./operators";
import numbers from "./numbers";
import symbols from "./symblos";
import reserved_words from "./reserved_words"
import identifiers from "./identifiers"

const mdxTokens: TokenType[] = [
    ...(Object as any).values(white_space),
    ...(Object as any).values(comments),
    ...(Object as any).values(operators.arithmetic_operators),
    // ...(Object as any).values(operators.assignment_operators),
    ...(Object as any).values(operators.bitwise_operators),
    ...(Object as any).values(operators.comparison_operators),
    // ...(Object as any).values(operators.concatenation_operators),
    // ...(Object as any).values(operators.set_operators),
    // ...(Object as any).values(operators.unary_operators),SEMICOLON
    ...(Object as any).values(numbers),
    ...(Object as any).values(symbols),
    ...(Object as any).values(reserved_words),
    ...(Object as any).values(identifiers),
]

const mdxLexer = new Lexer(mdxTokens);

export default mdxLexer;