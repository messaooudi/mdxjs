import { ITokenConfig, Lexer, createToken } from "chevrotain";

const FORWARD_SLASH_ASTERISK_PAIRS: ITokenConfig = {
    label: "FORWARD_SLASH_ASTERISK_PAIRS comment",
    name: "forward slash asterisk pairs /* */",
    pattern: /\/\*[^\*\/]*\*\//,
    group: Lexer.SKIPPED
};

export default createToken(FORWARD_SLASH_ASTERISK_PAIRS);