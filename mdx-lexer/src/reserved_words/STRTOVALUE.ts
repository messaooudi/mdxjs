import { ITokenConfig , createToken } from "chevrotain";

const STRTOVALUE: ITokenConfig = {
    name: "STRTOVALUE key word",
    label: "string to value",
    pattern: /STRTOVALUE/
};

export default createToken(STRTOVALUE);