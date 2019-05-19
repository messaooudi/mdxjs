import { ITokenConfig,createToken } from "chevrotain"

const ASSIGNEMENT: ITokenConfig = {
    name: "ASSIGNEMENT",
    label: "assignement",
    pattern: /=/
};

export default createToken(ASSIGNEMENT);