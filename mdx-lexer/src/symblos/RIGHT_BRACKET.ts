import { ITokenConfig, createToken } from "chevrotain";

const RIGHT_BRACKET: ITokenConfig = {
    name: "RIGHT_BRACKET",
    label: "right bracket",
    pattern: /]/
};

export default createToken(RIGHT_BRACKET);