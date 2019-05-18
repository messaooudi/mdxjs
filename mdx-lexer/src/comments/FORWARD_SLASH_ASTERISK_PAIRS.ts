import { ITokenConfig, Lexer, createToken } from "chevrotain";

const FORWARD_SLASH_ASTERISK_PAIRS: ITokenConfig = {
    name: "FORWARD_SLASH_ASTERISK_PAIRS",
    label: "forward slash asterisk pairs /* */",
    pattern: /\/\*[^\*\/]*\*\//,
    group: Lexer.SKIPPED
};

export default createToken(FORWARD_SLASH_ASTERISK_PAIRS);