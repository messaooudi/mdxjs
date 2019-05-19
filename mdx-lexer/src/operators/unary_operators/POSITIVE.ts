import { ITokenConfig, createToken } from "chevrotain";

const POSITIVE: ITokenConfig = {
    name: "POSITIVE unary",
    label: "positive",
    pattern: /\+/
};

export default createToken(POSITIVE);