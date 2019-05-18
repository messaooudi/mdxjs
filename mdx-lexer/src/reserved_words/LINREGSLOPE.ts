import { ITokenConfig , createToken } from "chevrotain";

const LINREGSLOPE: ITokenConfig = {
    name: "LINREGSLOPE key word",
    label: "linreg slope",
    pattern: /LINREGSLOPE/
};

export default createToken(LINREGSLOPE);