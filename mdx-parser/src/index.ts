import {lexer,tokens} from "mdx-lexer";
import {MDXParser} from "./MDXParser";

let inputText = `
SELECT {[Measures].[Internet Sales Amount]} ON COLUMNS,  
[Date].[Calendar Year].MEMBERS ON ROWS  
FROM [Adventure Works]  
WHERE(  
{[Customer].[Customer Geography].[Country].&[United States]  
, [Customer].[Customer Geography].[Country].&[United Kingdom]}  
, [Product].[Category].&[1])
`

const mdxParser = new MDXParser(tokens);
const lexingResult = lexer.tokenize(inputText)
mdxParser.input = lexingResult.tokens;
mdxParser.selectStatement()

if (mdxParser.errors.length > 0) {
    throw new Error("sad sad panda, Parsing errors detected")
}