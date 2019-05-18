import { ITokenConfig , createToken } from "chevrotain";

const STRIPCALCULATEDMEMBERS: ITokenConfig = {
    name: "STRIPCALCULATEDMEMBERS",
    label: "strip calculated members",
    pattern: /STRIPCALCULATEDMEMBERS/
};

export default createToken(STRIPCALCULATEDMEMBERS);