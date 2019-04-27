import { ITokenConfig , createToken } from "chevrotain";

const LEVEL: ITokenConfig = {
    label: "LEVEL key word",
    name: "level",
    pattern: /LEVEL/
};

export default createToken(LEVEL);