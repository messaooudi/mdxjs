import { ITokenConfig , createToken } from "chevrotain";

const COVARIANCEN: ITokenConfig = {
    name: "COVARIANCEN",
    label: "covariancen",
    pattern: /COVARIANCEN/
};

export default createToken(COVARIANCEN);