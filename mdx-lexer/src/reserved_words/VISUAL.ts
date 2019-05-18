import { ITokenConfig , createToken } from "chevrotain";

const VISUAL: ITokenConfig = {
    name: "VISUAL",
    label: "visual",
    pattern: /VISUAL/
};

export default createToken(VISUAL);