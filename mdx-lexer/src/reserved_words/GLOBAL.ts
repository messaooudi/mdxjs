import { ITokenConfig , createToken } from "chevrotain";

const GLOBAL: ITokenConfig = {
    name: "GLOBAL",
    label: "global",
    pattern: /GLOBAL/
};

export default createToken(GLOBAL);