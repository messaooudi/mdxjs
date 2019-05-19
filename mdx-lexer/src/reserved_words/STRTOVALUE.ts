import { ITokenConfig , createToken } from "chevrotain";

const STRTOVALUE: ITokenConfig = {
    name: "STRTOVALUE",
    label: "string to value",
    pattern: /STRTOVALUE/
};

export default createToken(STRTOVALUE);