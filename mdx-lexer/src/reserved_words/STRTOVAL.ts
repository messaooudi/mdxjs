import { ITokenConfig } from "chevrotain"

const STRTOVAL: ITokenConfig = {
    label: "STRTOVAL key word",
    name: "string to value",
    pattern: /STRTOVAL/
};

export default createToken(STRTOVAL);