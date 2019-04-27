import { ITokenConfig } from "chevrotain"

const OR: ITokenConfig = {
    label: "OR key word",
    name: "or",
    pattern: /OR/
};

export default createToken(OR);