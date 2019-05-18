import { ITokenConfig , createToken } from "chevrotain";

const LINREGPOINT: ITokenConfig = {
    name: "LINREGPOINT key word",
    label: "linreg point",
    pattern: /LINREGPOINT/
};

export default createToken(LINREGPOINT);