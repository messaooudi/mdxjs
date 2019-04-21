import { ITokenConfig,Lexer } from "chevrotain";

const FORWARD_SLASH_ASTERISK_PAIRS: ITokenConfig = {
    label: "FORWARD_SLASH_ASTERISK_PAIRS comment",
    name: "FORWARD_SLASH_ASTERISK_PAIRS",
    pattern: /\/\*[^\*\/]*\*\//,
    group : Lexer.SKIPPED
};

export default FORWARD_SLASH_ASTERISK_PAIRS;