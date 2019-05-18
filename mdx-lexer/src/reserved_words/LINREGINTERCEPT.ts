import { ITokenConfig , createToken } from "chevrotain";

const LINREGINTERCEPT: ITokenConfig = {
    name: "LINREGINTERCEPT key word",
    label: "linreg intercept",
    pattern: /LINREGINTERCEPT/
};

export default createToken(LINREGINTERCEPT);