import { ITokenConfig , createToken } from "chevrotain";

const SELF: ITokenConfig = {
    name: "SELF key word",
    label: "self",
    pattern: /SELF/
};

export default createToken(SELF);