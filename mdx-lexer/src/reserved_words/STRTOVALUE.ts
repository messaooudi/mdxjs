import { ITokenConfig , createToken } from "chevrotain";

const STRTOVALUE: ITokenConfig = {
    label: "STRTOVALUE key word",
    name: "string to value",
    pattern: /STRTOVALUE/
};

export default createToken(STRTOVALUE);