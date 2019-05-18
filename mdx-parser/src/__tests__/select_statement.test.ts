import {lexer} from "mdx-lexer";

const selectStatement = `
SELECT  [Measures].[Sales Amount] ON ROWS  
FROM [Adventure Works]
`

let lexingResult = lexer.tokenize(selectStatement)

test('SELECT statement', () => {
    expect(lexingResult.errors).toHaveLength(0);
});