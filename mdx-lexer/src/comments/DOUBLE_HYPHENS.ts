import { ITokenConfig, Lexer, createToken } from "chevrotain";

const DOUBLE_HYPHENS: ITokenConfig = {
    label: "DOUBLE_HYPHENS comment",
    name: "double hyphens --",
    pattern: /--.*/,
    group: Lexer.SKIPPED
};

export default createToken(DOUBLE_HYPHENS);