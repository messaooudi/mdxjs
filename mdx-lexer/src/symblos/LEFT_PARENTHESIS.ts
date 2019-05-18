import { ITokenConfig, createToken } from "chevrotain";

const LEFT_PARENTHESIS: ITokenConfig = {
    name: "left parenthesis symbol",
    label: "left parenthesis",
    pattern: /\(/
};

export default createToken(LEFT_PARENTHESIS);