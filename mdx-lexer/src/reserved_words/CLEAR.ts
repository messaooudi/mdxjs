import { ITokenConfig } from "chevrotain"

const CLEAR: ITokenConfig = {
    label: "CLEAR key word",
    name: "clear",
    pattern: /CLEAR/
};

export default createToken(CLEAR);