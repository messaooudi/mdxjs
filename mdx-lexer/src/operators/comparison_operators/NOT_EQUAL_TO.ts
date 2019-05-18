import { ITokenConfig,createToken } from "chevrotain"

const NOT_EQUAL_TO: ITokenConfig = {
    name: "NOT_EQUAL_TO",
    label: "not equal to",
    pattern: /<>/
};

export default createToken(NOT_EQUAL_TO);