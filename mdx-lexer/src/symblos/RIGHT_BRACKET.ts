import { ITokenConfig, createToken } from "chevrotain";

const RIGHT_BRACKET: ITokenConfig = {
    label: "right bracket symbol",
    name: "right bracket",
    pattern: /]/
};

export default createToken(RIGHT_BRACKET);