import { ITokenConfig , createToken } from "chevrotain";

const SELF_BEFORE_AFTER: ITokenConfig = {
    label: "SELF_BEFORE_AFTER key word",
    name: "self before after",
    pattern: /SELF_BEFORE_AFTER/
};

export default createToken(SELF_BEFORE_AFTER);