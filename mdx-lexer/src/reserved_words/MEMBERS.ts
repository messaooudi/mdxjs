import { ITokenConfig , createToken } from "chevrotain";

const MEMBERS: ITokenConfig = {
    label: "MEMBERS key word",
    name: "members",
    pattern: /MEMBERS/
};

export default createToken(MEMBERS);