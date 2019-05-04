import { ITokenConfig , createToken } from "chevrotain";

const CALCULATION: ITokenConfig = {
    label: "CALCULATION key word",
    name: "calculation on current pass",
    pattern: /CALCULATION/
};

export default createToken(CALCULATION);