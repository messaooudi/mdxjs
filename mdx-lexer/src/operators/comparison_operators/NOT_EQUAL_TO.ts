import { ITokenConfig,createToken } from "chevrotain"

const NOT_EQUAL_TO: ITokenConfig = {
    label: "NOT_EQUAL_TO comparison operator",
    name: "not equal to",
    pattern: /<>/
};

export default createToken(NOT_EQUAL_TO);