import { ITokenConfig , createToken } from "chevrotain";

const MEMBER: ITokenConfig = {
    name: "MEMBER",
    label: "member",
    pattern: /MEMBER/
};

export default createToken(MEMBER);