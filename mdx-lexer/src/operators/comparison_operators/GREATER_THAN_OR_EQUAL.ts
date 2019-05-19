import { ITokenConfig, createToken } from "chevrotain"

const GREATER_THAN_OR_EQUAL: ITokenConfig = {
    name: "GREATER_THAN_OR_EQUAL",
    label: "greater than or equal",
    pattern: />=/
};

export default createToken(GREATER_THAN_OR_EQUAL);