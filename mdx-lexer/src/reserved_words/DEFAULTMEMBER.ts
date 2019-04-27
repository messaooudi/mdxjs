import { ITokenConfig } from "chevrotain"

const DEFAULTMEMBER: ITokenConfig = {
    label: "DEFAULTMEMBER key word",
    name: "default member",
    pattern: /DEFAULTMEMBER/
};

export default createToken(DEFAULTMEMBER);