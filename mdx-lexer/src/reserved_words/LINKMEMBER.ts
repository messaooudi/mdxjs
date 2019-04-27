import { ITokenConfig } from "chevrotain"

const LINKMEMBER: ITokenConfig = {
    label: "LINKMEMBER key word",
    name: "link member",
    pattern: /LINKMEMBER/
};

export default createToken(LINKMEMBER);