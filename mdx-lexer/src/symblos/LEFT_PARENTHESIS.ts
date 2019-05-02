import { ITokenConfig, createToken } from "chevrotain";

const LEFT_PARENTHESIS: ITokenConfig = {
    label: "left parenthesis symbol",
    name: "left parenthesis",
    pattern: /\(/
};

export default createToken(LEFT_PARENTHESIS);