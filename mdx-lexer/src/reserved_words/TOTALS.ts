import { ITokenConfig , createToken } from "chevrotain";

const TOTALS: ITokenConfig = {
    name: "TOTALS key word",
    label: "totals",
    pattern: /TOTALS/
};

export default createToken(TOTALS);