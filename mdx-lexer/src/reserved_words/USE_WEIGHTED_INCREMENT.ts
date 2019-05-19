import { ITokenConfig , createToken } from "chevrotain";

const USE_WEIGHTED_INCREMENT: ITokenConfig = {
    name: "USE_WEIGHTED_INCREMENT",
    label: "use weighted increment",
    pattern: /USE_WEIGHTED_INCREMENT/
};

export default createToken(USE_WEIGHTED_INCREMENT);