import { ITokenConfig } from "chevrotain"

const VISUALTOTALS: ITokenConfig = {
    label: "VISUALTOTALS key word",
    name: "visual totals",
    pattern: /VISUALTOTALS/
};

export default createToken(VISUALTOTALS);