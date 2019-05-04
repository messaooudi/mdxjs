import { ITokenConfig , createToken } from "chevrotain";

const COVARIANCEN: ITokenConfig = {
    label: "COVARIANCEN key word",
    name: "covariancen",
    pattern: /COVARIANCEN/
};

export default createToken(COVARIANCEN);