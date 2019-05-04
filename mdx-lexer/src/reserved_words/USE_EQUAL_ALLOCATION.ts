import { ITokenConfig , createToken } from "chevrotain";

const USE_EQUAL_ALLOCATION: ITokenConfig = {
    label: "USE_EQUAL_ALLOCATION key word",
    name: "use equal allocation",
    pattern: /USE_EQUAL_ALLOCATION/
};

export default createToken(USE_EQUAL_ALLOCATION);