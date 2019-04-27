import { ITokenConfig , createToken } from "chevrotain";

const STRTOSET: ITokenConfig = {
    label: "STRTOSET key word",
    name: "string to set",
    pattern: /STRTOSET/
};

export default createToken(STRTOSET);