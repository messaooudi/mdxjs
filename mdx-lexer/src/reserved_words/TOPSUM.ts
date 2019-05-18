import { ITokenConfig , createToken } from "chevrotain";

const TOPSUM: ITokenConfig = {
    name: "TOPSUM key word",
    label: "top sum",
    pattern: /TOPSUM/
};

export default createToken(TOPSUM);