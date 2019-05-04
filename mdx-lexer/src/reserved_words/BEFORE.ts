import { ITokenConfig , createToken } from "chevrotain";

const BEFORE: ITokenConfig = {
    label: "BEFORE key word",
    name: "before",
    pattern: /BEFORE/
};

export default createToken(BEFORE);