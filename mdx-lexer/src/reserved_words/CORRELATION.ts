import { ITokenConfig , createToken } from "chevrotain";

const CORRELATION: ITokenConfig = {
    name: "CORRELATION key word",
    label: "coprelation",
    pattern: /CORRELATION/
};

export default createToken(CORRELATION);