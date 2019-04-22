import { ITokenConfig,Lexer } from "chevrotain";

const DOUBLE_FORWARD_SLASHES: ITokenConfig = {
    label: "DOUBLE_FORWARD_SLASHES comment",
    name: "double forward slashes //",
    pattern: /\/\/.*/,
    group : Lexer.SKIPPED
};

export default DOUBLE_FORWARD_SLASHES;