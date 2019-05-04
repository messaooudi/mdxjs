import { ITokenConfig, Lexer, createToken } from "chevrotain";

const WHITE_SPACE: ITokenConfig = {
    label: "WHITE_SPACE",
    name: "white space",
    pattern: /\s+/,
    group: Lexer.SKIPPED
};

export default createToken(WHITE_SPACE);