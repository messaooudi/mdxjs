import { ITokenConfig , createToken } from "chevrotain";

const LINREGR2: ITokenConfig = {
    name: "LINREGR2 key word",
    label: "linreg r2",
    pattern: /LINREGR2/
};

export default createToken(LINREGR2);