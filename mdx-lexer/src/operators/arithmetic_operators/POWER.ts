import { ITokenConfig,createToken } from "chevrotain"

const POWER: ITokenConfig = {
    name: "POWER",
    label: "power",
    pattern: /\^/
};

export default createToken(POWER);