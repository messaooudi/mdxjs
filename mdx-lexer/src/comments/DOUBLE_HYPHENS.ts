import { ITokenConfig, Lexer, createToken } from "chevrotain";

const DOUBLE_HYPHENS: ITokenConfig = {
    name: "DOUBLE_HYPHENS",
    label: "double hyphens --",
    pattern: /--.*/,
    group: Lexer.SKIPPED
};

export default createToken(DOUBLE_HYPHENS);