import { ITokenConfig , createToken } from "chevrotain";

const CLOSINGPERIOD: ITokenConfig = {
    name: "CLOSINGPERIOD key word",
    label: "closing period",
    pattern: /CLOSINGPERIOD/
};

export default createToken(CLOSINGPERIOD);