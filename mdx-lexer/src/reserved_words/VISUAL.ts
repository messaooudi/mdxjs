import { ITokenConfig , createToken } from "chevrotain";

const VISUAL: ITokenConfig = {
    name: "VISUAL key word",
    label: "visual",
    pattern: /VISUAL/
};

export default createToken(VISUAL);