import { ITokenConfig, Lexer, createToken } from "chevrotain";

const DOUBLE_FORWARD_SLASHES: ITokenConfig = {
    label: "DOUBLE_FORWARD_SLASHES comment",
    name: "double forward slashes //",
    pattern: /\/\/.*/,
    group: Lexer.SKIPPED
};

export default createToken(DOUBLE_FORWARD_SLASHES);