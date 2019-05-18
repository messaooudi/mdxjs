import { ITokenConfig, createToken } from "chevrotain";

const POSITIVE: ITokenConfig = {
    name: "POSITIVE unary operator",
    label: "positive",
    pattern: /\+/
};

export default createToken(POSITIVE);