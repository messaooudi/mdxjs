import { ITokenConfig } from "chevrotain"

const GLOBAL: ITokenConfig = {
    label: "GLOBAL key word",
    name: "global",
    pattern: /GLOBAL/
};

export default createToken(GLOBAL);