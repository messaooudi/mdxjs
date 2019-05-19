import { ITokenConfig , createToken } from "chevrotain";

const LINREGVARIANCE: ITokenConfig = {
    name: "LINREGVARIANCE",
    label: "linreg variance",
    pattern: /LINREGVARIANCE/
};

export default createToken(LINREGVARIANCE);