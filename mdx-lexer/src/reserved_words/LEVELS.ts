import { ITokenConfig , createToken } from "chevrotain";

const LEVELS: ITokenConfig = {
    name: "LEVELS",
    label: "levels",
    pattern: /LEVELS/
};

export default createToken(LEVELS);