import { ITokenConfig, createToken } from "chevrotain"

const NEGATIVE: ITokenConfig = {
    name: " NEGATIVE unary",
    label: "negative",
    pattern: /-/
};

export default createToken(NEGATIVE);