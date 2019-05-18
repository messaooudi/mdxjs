import { ITokenConfig , createToken } from "chevrotain";

const MEMBERS: ITokenConfig = {
    name: "MEMBERS",
    label: "members",
    pattern: /MEMBERS/
};

export default createToken(MEMBERS);