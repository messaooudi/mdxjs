import { ITokenConfig , createToken } from "chevrotain";

const USE_WEIGHTED_ALLOCATION: ITokenConfig = {
    label: "USE_WEIGHTED_ALLOCATION key word",
    name: "use weighted allocation",
    pattern: /USE_WEIGHTED_ALLOCATION/
};

export default createToken(USE_WEIGHTED_ALLOCATION);