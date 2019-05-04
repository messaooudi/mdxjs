import { ITokenConfig,createToken } from "chevrotain"

const POWER: ITokenConfig = {
    label: "POWER arethmetic operator",
    name: "power",
    pattern: /\^/
};

export default createToken(POWER);