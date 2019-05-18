import { ITokenConfig,createToken } from "chevrotain"

const NOT: ITokenConfig = {
    name: "NOT bitwise",
    label: "not",
    pattern: /NOT/
};

export default createToken(NOT);