import { ITokenConfig } from "chevrotain"

const BEFORE_AND_AFTER: ITokenConfig = {
    label: "BEFORE_AND_AFTER key word",
    name: "before and after",
    pattern: /BEFORE_AND_AFTER/
};

export default createToken(BEFORE_AND_AFTER);