import { ITokenConfig,createToken } from "chevrotain"

const NOT: ITokenConfig = {
    label: "NOT bitwise operator",
    name: "not",
    pattern: /NOT/
};

export default createToken(NOT);