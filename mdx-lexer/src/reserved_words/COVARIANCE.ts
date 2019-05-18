import { ITokenConfig , createToken } from "chevrotain";

const COVARIANCE: ITokenConfig = {
    name: "COVARIANCE key word",
    label: "covariance",
    pattern: /COVARIANCE/
};

export default createToken(COVARIANCE);