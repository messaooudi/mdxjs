import { ITokenConfig , createToken } from "chevrotain";

const GENERATE: ITokenConfig = {
    label: "GENERATE key word",
    name: "generate",
    pattern: /GENERATE/
};

export default createToken(GENERATE);