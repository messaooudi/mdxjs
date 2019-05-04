import { ITokenConfig , createToken } from "chevrotain";

const TOPCOUNT: ITokenConfig = {
    label: "TOPCOUNT key word",
    name: "top count",
    pattern: /TOPCOUNT/
};

export default createToken(TOPCOUNT);