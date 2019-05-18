import { ITokenConfig,createToken } from "chevrotain"

const MULTIPLY: ITokenConfig = {
    name: "MULTIPLY",
    label: "multiply",
    pattern: /\*/
};

export default createToken(MULTIPLY);