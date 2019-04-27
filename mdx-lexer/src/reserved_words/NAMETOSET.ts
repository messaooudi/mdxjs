import { ITokenConfig } from "chevrotain"

const NAMETOSET: ITokenConfig = {
    label: "NAMETOSET key word",
    name: "name to set",
    pattern: /NAMETOSET/
};

export default createToken(NAMETOSET);