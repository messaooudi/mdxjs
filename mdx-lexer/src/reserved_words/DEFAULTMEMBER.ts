import { ITokenConfig , createToken } from "chevrotain";

const DEFAULTMEMBER: ITokenConfig = {
    name: "DEFAULTMEMBER",
    label: "default member",
    pattern: /DEFAULTMEMBER/
};

export default createToken(DEFAULTMEMBER);