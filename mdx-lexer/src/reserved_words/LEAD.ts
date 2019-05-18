import { ITokenConfig , createToken } from "chevrotain";

const LEAD: ITokenConfig = {
    name: "LEAD key word",
    label: "lead",
    pattern: /LEAD/
};

export default createToken(LEAD);