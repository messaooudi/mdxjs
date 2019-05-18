import { ITokenConfig , createToken } from "chevrotain";

const NAMETOSET: ITokenConfig = {
    name: "NAMETOSET key word",
    label: "name to set",
    pattern: /NAMETOSET/
};

export default createToken(NAMETOSET);