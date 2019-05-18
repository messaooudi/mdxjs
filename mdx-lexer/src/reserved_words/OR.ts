import { ITokenConfig , createToken } from "chevrotain";

const OR: ITokenConfig = {
    name: "OR",
    label: "or",
    pattern: /OR/
};

export default createToken(OR);