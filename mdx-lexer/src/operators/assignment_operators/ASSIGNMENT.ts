import { ITokenConfig,createToken } from "chevrotain"

const ASSIGNEMENT: ITokenConfig = {
    label: "ASSIGNEMENT operator",
    name: "assignement",
    pattern: /=/
};

export default createToken(ASSIGNEMENT);