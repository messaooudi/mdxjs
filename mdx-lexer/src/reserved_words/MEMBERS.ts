import { ITokenConfig , createToken } from "chevrotain";

const MEMBERS: ITokenConfig = {
    name: "MEMBERS key word",
    label: "members",
    pattern: /MEMBERS/
};

export default createToken(MEMBERS);