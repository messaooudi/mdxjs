import { ITokenConfig , createToken } from "chevrotain";

const CURRENTMEMBER: ITokenConfig = {
    name: "CURRENTMEMBER",
    label: "current member",
    pattern: /CURRENTMEMBER/
};

export default createToken(CURRENTMEMBER);