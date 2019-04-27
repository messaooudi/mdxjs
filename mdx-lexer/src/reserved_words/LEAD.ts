import { ITokenConfig } from "chevrotain"

const LEAD: ITokenConfig = {
    label: "LEAD key word",
    name: "lead",
    pattern: /LEAD/
};

export default createToken(LEAD);