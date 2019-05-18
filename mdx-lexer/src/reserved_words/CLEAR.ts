import { ITokenConfig , createToken } from "chevrotain";

const CLEAR: ITokenConfig = {
    name: "CLEAR key word",
    label: "clear",
    pattern: /CLEAR/
};

export default createToken(CLEAR);