import { ITokenConfig , createToken } from "chevrotain";

const CLOSINGPERIOD: ITokenConfig = {
    name: "CLOSINGPERIOD",
    label: "closing period",
    pattern: /CLOSINGPERIOD/
};

export default createToken(CLOSINGPERIOD);