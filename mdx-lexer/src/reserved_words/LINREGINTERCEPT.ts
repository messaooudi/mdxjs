import { ITokenConfig , createToken } from "chevrotain";

const LINREGINTERCEPT: ITokenConfig = {
    name: "LINREGINTERCEPT",
    label: "linreg intercept",
    pattern: /LINREGINTERCEPT/
};

export default createToken(LINREGINTERCEPT);