import { ITokenConfig , createToken } from "chevrotain";

const PASS: ITokenConfig = {
    name: "PASS",
    label: "pass",
    pattern: /PASS/
};

export default createToken(PASS);