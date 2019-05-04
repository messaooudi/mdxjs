import { ITokenConfig , createToken } from "chevrotain";

const PASS: ITokenConfig = {
    label: "PASS key word",
    name: "pass",
    pattern: /PASS/
};

export default createToken(PASS);