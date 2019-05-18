import { ITokenConfig,createToken } from "chevrotain"

const DIVIDE: ITokenConfig = {
    name: "DIVIDE arethmetic operator",
    label: "divide",
    pattern: /\//
};

export default createToken(DIVIDE);