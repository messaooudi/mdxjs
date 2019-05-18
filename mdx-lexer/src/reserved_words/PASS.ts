import { ITokenConfig , createToken } from "chevrotain";

const PASS: ITokenConfig = {
    name: "PASS key word",
    label: "pass",
    pattern: /PASS/
};

export default createToken(PASS);