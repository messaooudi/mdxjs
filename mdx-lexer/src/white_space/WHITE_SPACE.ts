import { ITokenConfig,Lexer } from "chevrotain";

const WHITE_SPACE: ITokenConfig = {
    label: "WHITE_SPACE",
    name: "white space",
    pattern: /\s+/,
    group : Lexer.SKIPPED
};

export default WHITE_SPACE;