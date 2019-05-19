import { ITokenConfig, createToken } from "chevrotain";

const SEMICOLON: ITokenConfig = {
    name: "semicolon",
    label: "semicolon",
    pattern: /;/
};

export default createToken(SEMICOLON);