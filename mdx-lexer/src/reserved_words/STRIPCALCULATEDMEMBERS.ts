import { ITokenConfig , createToken } from "chevrotain";

const STRIPCALCULATEDMEMBERS: ITokenConfig = {
    label: "STRIPCALCULATEDMEMBERS key word",
    name: "strip calculated members",
    pattern: /STRIPCALCULATEDMEMBERS/
};

export default createToken(STRIPCALCULATEDMEMBERS);