import { ITokenConfig,Lexer } from "chevrotain";

const DOUBLE_HYPHENS: ITokenConfig = {
    label: "DOUBLE_HYPHENS comment",
    name: "DOUBLE_HYPHENS",
    pattern: /--.*/,
    group : Lexer.SKIPPED
};

export default DOUBLE_HYPHENS;