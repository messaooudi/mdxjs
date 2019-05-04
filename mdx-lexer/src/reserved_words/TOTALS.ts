import { ITokenConfig , createToken } from "chevrotain";

const TOTALS: ITokenConfig = {
    label: "TOTALS key word",
    name: "totals",
    pattern: /TOTALS/
};

export default createToken(TOTALS);