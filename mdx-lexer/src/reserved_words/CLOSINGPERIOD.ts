import { ITokenConfig , createToken } from "chevrotain";

const CLOSINGPERIOD: ITokenConfig = {
    label: "CLOSINGPERIOD key word",
    name: "closing period",
    pattern: /CLOSINGPERIOD/
};

export default createToken(CLOSINGPERIOD);