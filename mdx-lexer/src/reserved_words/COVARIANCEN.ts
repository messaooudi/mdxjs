import { ITokenConfig , createToken } from "chevrotain";

const COVARIANCEN: ITokenConfig = {
    name: "COVARIANCEN key word",
    label: "covariancen",
    pattern: /COVARIANCEN/
};

export default createToken(COVARIANCEN);