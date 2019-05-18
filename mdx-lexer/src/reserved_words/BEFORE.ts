import { ITokenConfig , createToken } from "chevrotain";

const BEFORE: ITokenConfig = {
    name: "BEFORE",
    label: "before",
    pattern: /BEFORE/
};

export default createToken(BEFORE);