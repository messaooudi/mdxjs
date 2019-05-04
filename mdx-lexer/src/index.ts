import { Lexer, TokenType } from 'chevrotain';
import white_space from './white_space';
import comments from './comments';
import operators from './operators';
import numbers from './numbers';
import symbols from './symblos';
import reserved_words from './reserved_words';
import identifiers from './identifiers';

const mdxTokens: TokenType[] = [
    ...Object.values(white_space),
    ...Object.values(comments),
    ...Object.values(operators.arithmetic_operators),
    ...Object.values(operators.comparison_operators),
    ...Object.values(numbers),
    ...Object.values(symbols),
    ...Object.values(reserved_words),
    ...Object.values(identifiers)
];

const mdxLexer = new Lexer(mdxTokens);

export default mdxLexer;
