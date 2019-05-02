import { ITokenConfig, createToken } from "chevrotain";

const RIGHT_PARENTHESIS: ITokenConfig = {
    label: "right parenthesis symbol",
    name: "right parenthesis",
    pattern: /\)/
};

export default createToken(RIGHT_PARENTHESIS);