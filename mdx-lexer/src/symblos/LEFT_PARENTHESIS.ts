import { ITokenConfig, createToken } from "chevrotain";

const LEFT_PARENTHESIS: ITokenConfig = {
    name: "LEFT_PARENTHESIS",
    label: "left parenthesis",
    pattern: /\(/
};

export default createToken(LEFT_PARENTHESIS);