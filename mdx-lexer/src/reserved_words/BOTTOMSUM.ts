import { ITokenConfig } from "chevrotain"

const BOTTOMSUM: ITokenConfig = {
    label: "BOTTOMSUM key word",
    name: "bottom sum",
    pattern: /BOTTOMSUM/
};

export default createToken(BOTTOMSUM);