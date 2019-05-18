import { ITokenConfig , createToken } from "chevrotain";

const LEVEL: ITokenConfig = {
    name: "LEVEL key word",
    label: "level",
    pattern: /LEVEL/
};

export default createToken(LEVEL);