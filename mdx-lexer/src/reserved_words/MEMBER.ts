import { ITokenConfig , createToken } from "chevrotain";

const MEMBER: ITokenConfig = {
    name: "MEMBER key word",
    label: "member",
    pattern: /MEMBER/
};

export default createToken(MEMBER);