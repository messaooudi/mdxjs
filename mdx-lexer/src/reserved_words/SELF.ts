import { ITokenConfig , createToken } from "chevrotain";

const SELF: ITokenConfig = {
    label: "SELF key word",
    name: "self",
    pattern: /SELF/
};

export default createToken(SELF);