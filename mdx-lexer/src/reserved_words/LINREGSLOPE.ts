import { ITokenConfig , createToken } from "chevrotain";

const LINREGSLOPE: ITokenConfig = {
    name: "LINREGSLOPE",
    label: "linreg slope",
    pattern: /LINREGSLOPE/
};

export default createToken(LINREGSLOPE);