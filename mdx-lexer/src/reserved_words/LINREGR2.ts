import { ITokenConfig , createToken } from "chevrotain";

const LINREGR2: ITokenConfig = {
    label: "LINREGR2 key word",
    name: "linreg r2",
    pattern: /LINREGR2/
};

export default createToken(LINREGR2);