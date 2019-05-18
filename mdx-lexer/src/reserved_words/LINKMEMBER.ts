import { ITokenConfig , createToken } from "chevrotain";

const LINKMEMBER: ITokenConfig = {
    name: "LINKMEMBER",
    label: "link member",
    pattern: /LINKMEMBER/
};

export default createToken(LINKMEMBER);