import { ITokenConfig , createToken } from "chevrotain";

const TOTALS: ITokenConfig = {
    name: "TOTALS",
    label: "totals",
    pattern: /TOTALS/
};

export default createToken(TOTALS);