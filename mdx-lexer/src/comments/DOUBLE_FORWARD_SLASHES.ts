import { ITokenConfig, Lexer, createToken } from "chevrotain";

const DOUBLE_FORWARD_SLASHES: ITokenConfig = {
    name: "DOUBLE_FORWARD_SLASHES comment",
    label: "double forward slashes //",
    pattern: /\/\/.*/,
    group: Lexer.SKIPPED
};

export default createToken(DOUBLE_FORWARD_SLASHES);