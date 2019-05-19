import { ITokenConfig , createToken } from "chevrotain";

const LINREGPOINT: ITokenConfig = {
    name: "LINREGPOINT",
    label: "linreg point",
    pattern: /LINREGPOINT/
};

export default createToken(LINREGPOINT);