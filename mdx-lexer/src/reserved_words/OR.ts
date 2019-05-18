import { ITokenConfig , createToken } from "chevrotain";

const OR: ITokenConfig = {
    name: "OR key word",
    label: "or",
    pattern: /OR/
};

export default createToken(OR);