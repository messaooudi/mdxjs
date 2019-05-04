import { ITokenConfig, createToken } from "chevrotain";

const SEMICOLON: ITokenConfig = {
    label: "semicolon symbol",
    name: "semicolon",
    pattern: /;/
};

export default createToken(SEMICOLON);