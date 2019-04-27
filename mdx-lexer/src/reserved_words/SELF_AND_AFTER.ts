import { ITokenConfig } from "chevrotain"

const SELF_AND_AFTER: ITokenConfig = {
    label: "SELF_AND_AFTER key word",
    name: "self and after",
    pattern: /SELF_AND_AFTER/
};

export default createToken(SELF_AND_AFTER);