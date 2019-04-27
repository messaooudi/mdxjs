import { ITokenConfig , createToken } from "chevrotain";

const NO_ALLOCATION: ITokenConfig = {
    label: "NO_ALLOCATION key word",
    name: "no allocation",
    pattern: /NO_ALLOCATION/
};

export default createToken(NO_ALLOCATION);