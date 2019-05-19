import { ITokenConfig , createToken } from "chevrotain";

const LEVEL: ITokenConfig = {
    name: "LEVEL",
    label: "level",
    pattern: /LEVEL/
};

export default createToken(LEVEL);