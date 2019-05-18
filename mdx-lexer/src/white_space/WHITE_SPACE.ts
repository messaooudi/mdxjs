import { ITokenConfig, Lexer, createToken } from "chevrotain";

const WHITE_SPACE: ITokenConfig = {
    name: "WHITE_SPACE",
    label: "white space",
    pattern: /\s+/,
    group: Lexer.SKIPPED
};

export default createToken(WHITE_SPACE);