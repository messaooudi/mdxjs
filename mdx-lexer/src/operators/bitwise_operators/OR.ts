import { ITokenConfig,createToken } from "chevrotain"

const OR: ITokenConfig = {
    label: "OR bitwise operator",
    name: "or",
    pattern: /OR/
};

export default createToken(OR);