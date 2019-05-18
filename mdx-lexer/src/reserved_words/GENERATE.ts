import { ITokenConfig , createToken } from "chevrotain";

const GENERATE: ITokenConfig = {
    name: "GENERATE",
    label: "generate",
    pattern: /GENERATE/
};

export default createToken(GENERATE);