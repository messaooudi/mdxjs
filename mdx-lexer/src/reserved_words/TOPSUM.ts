import { ITokenConfig , createToken } from "chevrotain";

const TOPSUM: ITokenConfig = {
    name: "TOPSUM",
    label: "top sum",
    pattern: /TOPSUM/
};

export default createToken(TOPSUM);