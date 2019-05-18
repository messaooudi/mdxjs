import { ITokenConfig , createToken } from "chevrotain";

const VISUALTOTALS: ITokenConfig = {
    name: "VISUALTOTALS",
    label: "visual totals",
    pattern: /VISUALTOTALS/
};

export default createToken(VISUALTOTALS);