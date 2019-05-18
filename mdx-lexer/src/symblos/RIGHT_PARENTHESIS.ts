import { ITokenConfig, createToken } from "chevrotain";

const RIGHT_PARENTHESIS: ITokenConfig = {
    name: "right parenthesis symbol",
    label: "right parenthesis",
    pattern: /\)/
};

export default createToken(RIGHT_PARENTHESIS);