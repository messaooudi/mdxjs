import { ITokenConfig , createToken } from "chevrotain";

const GLOBAL: ITokenConfig = {
    name: "GLOBAL key word",
    label: "global",
    pattern: /GLOBAL/
};

export default createToken(GLOBAL);