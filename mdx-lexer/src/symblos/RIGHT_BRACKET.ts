import { ITokenConfig, createToken } from "chevrotain";

const RIGHT_BRACKET: ITokenConfig = {
    name: "right bracket symbol",
    label: "right bracket",
    pattern: /]/
};

export default createToken(RIGHT_BRACKET);