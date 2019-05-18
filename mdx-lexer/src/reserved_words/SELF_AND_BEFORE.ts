import { ITokenConfig , createToken } from "chevrotain";

const SELF_AND_BEFORE: ITokenConfig = {
    name: "SELF_AND_BEFORE",
    label: "self and before",
    pattern: /SELF_AND_BEFORE/
};

export default createToken(SELF_AND_BEFORE);