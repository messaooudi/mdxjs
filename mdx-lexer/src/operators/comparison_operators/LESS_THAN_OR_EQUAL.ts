import { ITokenConfig, createToken } from "chevrotain"

const LESS_THAN_OR_EQUAL: ITokenConfig = {
    name: "LESS_THAN_OR_EQUAL comparison operator",
    label: "less than or equal",
    pattern: /<=/
};

export default createToken(LESS_THAN_OR_EQUAL);