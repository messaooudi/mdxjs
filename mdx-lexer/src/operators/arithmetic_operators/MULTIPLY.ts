import { ITokenConfig,createToken } from "chevrotain"

const MULTIPLY: ITokenConfig = {
    label: "MULTIPLY arethmetic operator",
    name: "multiply",
    pattern: /\*/
};

export default createToken(MULTIPLY);