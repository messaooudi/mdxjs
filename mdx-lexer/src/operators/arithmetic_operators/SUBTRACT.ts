import { ITokenConfig,createToken } from "chevrotain"

const SUBTRACT: ITokenConfig = {
    label: "SUBTRACT arethmetic operator",
    name: "subtract",
    pattern: /-/
};

export default createToken(SUBTRACT);