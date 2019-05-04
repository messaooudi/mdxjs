import mdxLexer from "mdx-lexer";

let inputText = `
SELECT {[Measures].[Internet Sales Amount]} ON COLUMNS,  
[Date].[Calendar Year].MEMBERS ON ROWS  
FROM [Adventure Works]  
WHERE(  
{[Customer].[Customer Geography].[Country].&[United States]  
, [Customer].[Customer Geography].[Country].&[United Kingdom]}  
, [Product].[Category].&[1])
`
let lexingResult = mdxLexer.tokenize(inputText);