import { ITokenConfig , createToken } from "chevrotain";

const STRTOVAL: ITokenConfig = {
    name: "STRTOVAL",
    label: "string to value",
    pattern: /STRTOVAL/
};

export default createToken(STRTOVAL);