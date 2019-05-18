import { ITokenConfig , createToken } from "chevrotain";

const ALLMEMBERS: ITokenConfig = {
    name: "ALLMEMBERS key word",
    label: "all members",
    pattern: /ALLMEMBERS/
};

export default createToken(ALLMEMBERS);