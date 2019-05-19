import { ITokenConfig , createToken } from "chevrotain";

const CORRELATION: ITokenConfig = {
    name: "CORRELATION",
    label: "coprelation",
    pattern: /CORRELATION/
};

export default createToken(CORRELATION);