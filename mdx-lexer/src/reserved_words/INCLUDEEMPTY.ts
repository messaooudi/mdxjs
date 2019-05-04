import { ITokenConfig , createToken } from "chevrotain";

const INCLUDEEMPTY: ITokenConfig = {
    label: "INCLUDEEMPTY key word",
    name: "include empty",
    pattern: /INCLUDEEMPTY/
};

export default createToken(INCLUDEEMPTY);