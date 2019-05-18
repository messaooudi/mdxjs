import { ITokenConfig , createToken } from "chevrotain";

const GENERATE: ITokenConfig = {
    name: "GENERATE key word",
    label: "generate",
    pattern: /GENERATE/
};

export default createToken(GENERATE);