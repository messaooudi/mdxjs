import { ITokenConfig , createToken } from "chevrotain";

const DEFAULT_MEMBER: ITokenConfig = {
    name: "DEFAULT_MEMBER key word",
    label: "default memeber",
    pattern: /DEFAULT_MEMBER/
};

export default createToken(DEFAULT_MEMBER);