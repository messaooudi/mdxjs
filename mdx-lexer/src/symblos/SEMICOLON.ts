import { ITokenConfig, createToken } from "chevrotain";

const SEMICOLON: ITokenConfig = {
    name: "semicolon symbol",
    label: "semicolon",
    pattern: /;/
};

export default createToken(SEMICOLON);