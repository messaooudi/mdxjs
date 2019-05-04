import { ITokenConfig , createToken } from "chevrotain";

const USE_WEIGHTED_INCREMENT: ITokenConfig = {
    label: "USE_WEIGHTED_INCREMENT key word",
    name: "use weighted increment",
    pattern: /USE_WEIGHTED_INCREMENT/
};

export default createToken(USE_WEIGHTED_INCREMENT);