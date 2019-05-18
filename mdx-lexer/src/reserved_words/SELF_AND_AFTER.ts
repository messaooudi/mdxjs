import { ITokenConfig , createToken } from "chevrotain";

const SELF_AND_AFTER: ITokenConfig = {
    name: "SELF_AND_AFTER key word",
    label: "self and after",
    pattern: /SELF_AND_AFTER/
};

export default createToken(SELF_AND_AFTER);