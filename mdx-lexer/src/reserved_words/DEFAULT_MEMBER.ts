import { ITokenConfig , createToken } from "chevrotain";

const DEFAULT_MEMBER: ITokenConfig = {
    label: "DEFAULT_MEMBER key word",
    name: "default memeber",
    pattern: /DEFAULT_MEMBER/
};

export default createToken(DEFAULT_MEMBER);