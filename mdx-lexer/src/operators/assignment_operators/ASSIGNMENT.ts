import { ITokenConfig,createToken } from "chevrotain"

const ASSIGNEMENT: ITokenConfig = {
    name: "ASSIGNEMENT operator",
    label: "assignement",
    pattern: /=/
};

export default createToken(ASSIGNEMENT);