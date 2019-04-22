import { ITokenConfig,Lexer } from "chevrotain";

const DOUBLE_HYPHENS: ITokenConfig = {
    label: "DOUBLE_HYPHENS comment",
    name: "double hyphens --",
    pattern: /--.*/,
    group : Lexer.SKIPPED
};

export default DOUBLE_HYPHENS;