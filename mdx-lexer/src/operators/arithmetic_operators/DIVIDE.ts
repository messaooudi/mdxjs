import { ITokenConfig,createToken } from "chevrotain"

const DIVIDE: ITokenConfig = {
    label: "DIVIDE arethmetic operator",
    name: "divide",
    pattern: /\//
};

export default createToken(DIVIDE);