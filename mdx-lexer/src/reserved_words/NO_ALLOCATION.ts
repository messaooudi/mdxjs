import { ITokenConfig , createToken } from "chevrotain";

const NO_ALLOCATION: ITokenConfig = {
    name: "NO_ALLOCATION key word",
    label: "no allocation",
    pattern: /NO_ALLOCATION/
};

export default createToken(NO_ALLOCATION);