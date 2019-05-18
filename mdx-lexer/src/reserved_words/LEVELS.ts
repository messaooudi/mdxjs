import { ITokenConfig , createToken } from "chevrotain";

const LEVELS: ITokenConfig = {
    name: "LEVELS key word",
    label: "levels",
    pattern: /LEVELS/
};

export default createToken(LEVELS);