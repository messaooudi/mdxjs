import { ITokenConfig , createToken } from "chevrotain";

const CALCULATION: ITokenConfig = {
    name: "CALCULATION",
    label: "calculation on current pass",
    pattern: /CALCULATION/
};

export default createToken(CALCULATION);