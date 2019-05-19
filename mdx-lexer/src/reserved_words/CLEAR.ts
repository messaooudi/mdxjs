import { ITokenConfig , createToken } from "chevrotain";

const CLEAR: ITokenConfig = {
    name: "CLEAR",
    label: "clear",
    pattern: /CLEAR/
};

export default createToken(CLEAR);