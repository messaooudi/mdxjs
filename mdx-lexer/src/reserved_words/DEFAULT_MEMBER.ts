import { ITokenConfig , createToken } from "chevrotain";

const DEFAULT_MEMBER: ITokenConfig = {
    name: "DEFAULT_MEMBER",
    label: "default memeber",
    pattern: /DEFAULT_MEMBER/
};

export default createToken(DEFAULT_MEMBER);