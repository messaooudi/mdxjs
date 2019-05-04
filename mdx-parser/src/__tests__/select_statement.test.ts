import mdxLexer from "mdx-lexer";

const selectStatement = `
SELECT  [Measures].[Sales Amount] ON ROWS  
FROM [Adventure Works]
`

let lexingResult = mdxLexer.tokenize(selectStatement)

test('SELECT statement', () => {
    expect(lexingResult.errors).toHaveLength(0);
});