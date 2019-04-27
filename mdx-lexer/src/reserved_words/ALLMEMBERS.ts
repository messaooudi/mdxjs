import { ITokenConfig , createToken } from "chevrotain";

const ALLMEMBERS: ITokenConfig = {
    label: "ALLMEMBERS key word",
    name: "all members",
    pattern: /ALLMEMBERS/
};

export default createToken(ALLMEMBERS);