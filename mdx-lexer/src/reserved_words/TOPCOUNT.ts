import { ITokenConfig , createToken } from "chevrotain";

const TOPCOUNT: ITokenConfig = {
    name: "TOPCOUNT",
    label: "top count",
    pattern: /TOPCOUNT/
};

export default createToken(TOPCOUNT);