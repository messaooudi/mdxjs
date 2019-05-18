import { ITokenConfig,createToken } from "chevrotain"

const OR: ITokenConfig = {
    name: "OR bitwise operator",
    label: "or",
    pattern: /OR/
};

export default createToken(OR);