import { ITokenConfig , createToken } from "chevrotain";

const SELF_BEFORE_AFTER: ITokenConfig = {
    name: "SELF_BEFORE_AFTER",
    label: "self before after",
    pattern: /SELF_BEFORE_AFTER/
};

export default createToken(SELF_BEFORE_AFTER);