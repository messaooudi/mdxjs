import { ITokenConfig, createToken } from "chevrotain"

const NEGATIVE: ITokenConfig = {
    label: " NEGATIVE unary operator",
    name: "negative",
    pattern: /-/
};

export default createToken(NEGATIVE);