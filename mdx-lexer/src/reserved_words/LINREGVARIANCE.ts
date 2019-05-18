import { ITokenConfig , createToken } from "chevrotain";

const LINREGVARIANCE: ITokenConfig = {
    name: "LINREGVARIANCE key word",
    label: "linreg variance",
    pattern: /LINREGVARIANCE/
};

export default createToken(LINREGVARIANCE);