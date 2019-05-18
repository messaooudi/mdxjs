import { ITokenConfig , createToken } from "chevrotain";

const CURRENT: ITokenConfig = {
    name: "CURRENT key word",
    label: "current",
    pattern: /CURRENT/
};

export default createToken(CURRENT);