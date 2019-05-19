import { ITokenConfig,createToken } from "chevrotain"

const DIVIDE: ITokenConfig = {
    name: "DIVIDE",
    label: "divide",
    pattern: /\//
};

export default createToken(DIVIDE);