import { ITokenConfig , createToken } from "chevrotain";

const ACTIONPARAMETERSET: ITokenConfig = {
    name: "ACTIONPARAMETERSET",
    label: "action parameter set",
    pattern: /ACTIONPARAMETERSET/
};

export default createToken(ACTIONPARAMETERSET);