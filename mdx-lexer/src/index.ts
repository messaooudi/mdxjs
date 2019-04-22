import { Lexer, ITokenConfig, TokenType, createToken } from "chevrotain";
import white_space from "./white_space"
import comments from "./comments"
import operators from "./operators";
import reserved_words from "./reserved_words"

const mdxTokens: TokenType[] = [
    ...(Object as any).values(white_space),
    ...(Object as any).values(comments),
    ...(Object as any).values(operators.arithmetic_operators),
    // ...(Object as any).values(operators.assignment_operators),
    ...(Object as any).values(operators.bitwise_operators),
    ...(Object as any).values(operators.comparison_operators),
    // ...(Object as any).values(operators.concatenation_operators),
    // ...(Object as any).values(operators.set_operators),
    // ...(Object as any).values(operators.unary_operators),
    ...(Object as any).values(reserved_words).map(config=> createToken(config))
]

console.table(mdxTokens);
const mdxLexer = new Lexer(mdxTokens);

let inputText = "SELECT Predict [Column1] as Column1Prediction FROM MyModel"
let lexingResult = mdxLexer.tokenize(inputText)

console.log(lexingResult)