import { ITokenConfig , createToken } from "chevrotain";

const OPENINGPERIOD: ITokenConfig = {
    name: "OPENINGPERIOD key word",
    label: "opening period",
    pattern: /OPENINGPERIOD/
};

export default createToken(OPENINGPERIOD);