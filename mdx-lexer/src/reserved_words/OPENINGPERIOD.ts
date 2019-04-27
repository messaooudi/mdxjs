import { ITokenConfig , createToken } from "chevrotain";

const OPENINGPERIOD: ITokenConfig = {
    label: "OPENINGPERIOD key word",
    name: "opening period",
    pattern: /OPENINGPERIOD/
};

export default createToken(OPENINGPERIOD);