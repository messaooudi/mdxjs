import { ITokenConfig , createToken } from "chevrotain";

const NO_ALLOCATION: ITokenConfig = {
    name: "NO_ALLOCATION",
    label: "no allocation",
    pattern: /NO_ALLOCATION/
};

export default createToken(NO_ALLOCATION);