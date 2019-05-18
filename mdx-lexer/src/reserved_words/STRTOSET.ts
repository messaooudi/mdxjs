import { ITokenConfig , createToken } from "chevrotain";

const STRTOSET: ITokenConfig = {
    name: "STRTOSET key word",
    label: "string to set",
    pattern: /STRTOSET/
};

export default createToken(STRTOSET);