import { ITokenConfig , createToken } from "chevrotain";

const BOTTOMSUM: ITokenConfig = {
    name: "BOTTOMSUM",
    label: "bottom sum",
    pattern: /BOTTOMSUM/
};

export default createToken(BOTTOMSUM);