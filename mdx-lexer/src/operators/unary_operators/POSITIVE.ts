import { ITokenConfig, createToken } from "chevrotain";

const POSITIVE: ITokenConfig = {
    label: "POSITIVE unary operator",
    name: "positive",
    pattern: /\+/
};

export default createToken(POSITIVE);