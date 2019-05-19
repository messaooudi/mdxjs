import { ITokenConfig,createToken } from "chevrotain"

const AND: ITokenConfig = {
    name: "AND bitwise",
    label: "and",
    pattern: /AND/
};

export default createToken(AND);