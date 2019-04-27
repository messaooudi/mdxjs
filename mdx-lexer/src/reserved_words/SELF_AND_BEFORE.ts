import { ITokenConfig , createToken } from "chevrotain";

const SELF_AND_BEFORE: ITokenConfig = {
    label: "SELF_AND_BEFORE key word",
    name: "self and before",
    pattern: /SELF_AND_BEFORE/
};

export default createToken(SELF_AND_BEFORE);