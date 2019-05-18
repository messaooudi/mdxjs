import { ITokenConfig,createToken } from "chevrotain"

const MULTIPLY: ITokenConfig = {
    name: "MULTIPLY arethmetic operator",
    label: "multiply",
    pattern: /\*/
};

export default createToken(MULTIPLY);