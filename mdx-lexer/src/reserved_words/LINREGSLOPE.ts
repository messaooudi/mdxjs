import { ITokenConfig , createToken } from "chevrotain";

const LINREGSLOPE: ITokenConfig = {
    label: "LINREGSLOPE key word",
    name: "linreg slope",
    pattern: /LINREGSLOPE/
};

export default createToken(LINREGSLOPE);