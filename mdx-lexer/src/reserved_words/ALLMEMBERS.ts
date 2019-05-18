import { ITokenConfig , createToken } from "chevrotain";

const ALLMEMBERS: ITokenConfig = {
    name: "ALLMEMBERS",
    label: "all members",
    pattern: /ALLMEMBERS/
};

export default createToken(ALLMEMBERS);