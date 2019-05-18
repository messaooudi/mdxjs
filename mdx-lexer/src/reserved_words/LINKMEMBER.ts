import { ITokenConfig , createToken } from "chevrotain";

const LINKMEMBER: ITokenConfig = {
    name: "LINKMEMBER key word",
    label: "link member",
    pattern: /LINKMEMBER/
};

export default createToken(LINKMEMBER);