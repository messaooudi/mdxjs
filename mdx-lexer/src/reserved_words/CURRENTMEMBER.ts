import { ITokenConfig , createToken } from "chevrotain";

const CURRENTMEMBER: ITokenConfig = {
    label: "CURRENTMEMBER key word",
    name: "current member",
    pattern: /CURRENTMEMBER/
};

export default createToken(CURRENTMEMBER);