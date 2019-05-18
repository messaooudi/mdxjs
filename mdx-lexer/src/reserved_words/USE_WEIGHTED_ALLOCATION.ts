import { ITokenConfig , createToken } from "chevrotain";

const USE_WEIGHTED_ALLOCATION: ITokenConfig = {
    name: "USE_WEIGHTED_ALLOCATION",
    label: "use weighted allocation",
    pattern: /USE_WEIGHTED_ALLOCATION/
};

export default createToken(USE_WEIGHTED_ALLOCATION);