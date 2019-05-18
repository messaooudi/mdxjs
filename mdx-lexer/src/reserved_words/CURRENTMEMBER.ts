import { ITokenConfig , createToken } from "chevrotain";

const CURRENTMEMBER: ITokenConfig = {
    name: "CURRENTMEMBER key word",
    label: "current member",
    pattern: /CURRENTMEMBER/
};

export default createToken(CURRENTMEMBER);