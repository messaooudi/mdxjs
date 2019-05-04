import { ITokenConfig , createToken } from "chevrotain";

const TOPSUM: ITokenConfig = {
    label: "TOPSUM key word",
    name: "top sum",
    pattern: /TOPSUM/
};

export default createToken(TOPSUM);