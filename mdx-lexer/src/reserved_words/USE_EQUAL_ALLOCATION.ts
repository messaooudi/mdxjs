import { ITokenConfig , createToken } from "chevrotain";

const USE_EQUAL_ALLOCATION: ITokenConfig = {
    name: "USE_EQUAL_ALLOCATION",
    label: "use equal allocation",
    pattern: /USE_EQUAL_ALLOCATION/
};

export default createToken(USE_EQUAL_ALLOCATION);