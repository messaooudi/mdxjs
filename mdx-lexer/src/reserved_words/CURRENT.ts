import { ITokenConfig , createToken } from "chevrotain";

const CURRENT: ITokenConfig = {
    name: "CURRENT",
    label: "current",
    pattern: /CURRENT/
};

export default createToken(CURRENT);