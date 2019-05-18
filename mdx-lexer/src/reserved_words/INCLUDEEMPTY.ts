import { ITokenConfig , createToken } from "chevrotain";

const INCLUDEEMPTY: ITokenConfig = {
    name: "INCLUDEEMPTY key word",
    label: "include empty",
    pattern: /INCLUDEEMPTY/
};

export default createToken(INCLUDEEMPTY);