import { ITokenConfig , createToken } from "chevrotain";

const COVARIANCE: ITokenConfig = {
    name: "COVARIANCE",
    label: "covariance",
    pattern: /COVARIANCE/
};

export default createToken(COVARIANCE);