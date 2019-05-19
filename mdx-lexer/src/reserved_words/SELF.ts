import { ITokenConfig , createToken } from "chevrotain";

const SELF: ITokenConfig = {
    name: "SELF",
    label: "self",
    pattern: /SELF/
};

export default createToken(SELF);