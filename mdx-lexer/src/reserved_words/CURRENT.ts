import { ITokenConfig , createToken } from "chevrotain";

const CURRENT: ITokenConfig = {
    label: "CURRENT key word",
    name: "current",
    pattern: /CURRENT/
};

export default createToken(CURRENT);