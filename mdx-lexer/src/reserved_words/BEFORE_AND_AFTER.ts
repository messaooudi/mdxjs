import { ITokenConfig , createToken } from "chevrotain";

const BEFORE_AND_AFTER: ITokenConfig = {
    name: "BEFORE_AND_AFTER key word",
    label: "before and after",
    pattern: /BEFORE_AND_AFTER/
};

export default createToken(BEFORE_AND_AFTER);