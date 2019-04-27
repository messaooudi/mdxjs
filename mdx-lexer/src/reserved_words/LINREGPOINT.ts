import { ITokenConfig , createToken } from "chevrotain";

const LINREGPOINT: ITokenConfig = {
    label: "LINREGPOINT key word",
    name: "linreg point",
    pattern: /LINREGPOINT/
};

export default createToken(LINREGPOINT);