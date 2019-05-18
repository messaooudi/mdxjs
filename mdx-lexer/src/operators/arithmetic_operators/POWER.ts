import { ITokenConfig,createToken } from "chevrotain"

const POWER: ITokenConfig = {
    name: "POWER arethmetic operator",
    label: "power",
    pattern: /\^/
};

export default createToken(POWER);