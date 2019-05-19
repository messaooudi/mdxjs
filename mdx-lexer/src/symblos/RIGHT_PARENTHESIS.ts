import { ITokenConfig, createToken } from "chevrotain";

const RIGHT_PARENTHESIS: ITokenConfig = {
    name: "RIGHT_PARENTHESIS",
    label: "right parenthesis",
    pattern: /\)/
};

export default createToken(RIGHT_PARENTHESIS);