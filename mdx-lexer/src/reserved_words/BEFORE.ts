import { ITokenConfig , createToken } from "chevrotain";

const BEFORE: ITokenConfig = {
    name: "BEFORE key word",
    label: "before",
    pattern: /BEFORE/
};

export default createToken(BEFORE);