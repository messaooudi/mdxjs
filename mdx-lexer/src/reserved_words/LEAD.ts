import { ITokenConfig , createToken } from "chevrotain";

const LEAD: ITokenConfig = {
    name: "LEAD",
    label: "lead",
    pattern: /LEAD/
};

export default createToken(LEAD);