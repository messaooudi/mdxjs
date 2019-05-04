import { ITokenConfig, createToken } from "chevrotain"

const LESS_THAN_OR_EQUAL: ITokenConfig = {
    label: "LESS_THAN_OR_EQUAL comparison operator",
    name: "less than or equal",
    pattern: /<=/
};

export default createToken(LESS_THAN_OR_EQUAL);