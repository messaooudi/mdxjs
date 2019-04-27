import { ITokenConfig } from "chevrotain"

const LINREGINTERCEPT: ITokenConfig = {
    label: "LINREGINTERCEPT key word",
    name: "linreg intercept",
    pattern: /LINREGINTERCEPT/
};

export default createToken(LINREGINTERCEPT);