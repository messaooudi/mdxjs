import { ITokenConfig , createToken } from "chevrotain";

const BOTTOMSUM: ITokenConfig = {
    name: "BOTTOMSUM key word",
    label: "bottom sum",
    pattern: /BOTTOMSUM/
};

export default createToken(BOTTOMSUM);