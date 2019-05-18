import {lexer,tokens} from "mdx-lexer";
import {MDXParser} from "./MDXParser";

let inputText = `
SELECT NON EMPTY date DIMENSION PROPERTIES ON COLUMNS,
{[Date].[Calendar Year]} ON 0
`

const mdxParser = new MDXParser(tokens);
const lexingResult = lexer.tokenize(inputText)
mdxParser.input = lexingResult.tokens;
mdxParser.selectStatement()

if (mdxParser.errors.length > 0) {
    console.log(mdxParser.errors)
    throw new Error("sad sad panda, Parsing errors detected")
}