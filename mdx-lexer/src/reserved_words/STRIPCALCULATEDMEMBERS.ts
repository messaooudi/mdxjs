import { ITokenConfig , createToken } from "chevrotain";

const STRIPCALCULATEDMEMBERS: ITokenConfig = {
    name: "STRIPCALCULATEDMEMBERS key word",
    label: "strip calculated members",
    pattern: /STRIPCALCULATEDMEMBERS/
};

export default createToken(STRIPCALCULATEDMEMBERS);