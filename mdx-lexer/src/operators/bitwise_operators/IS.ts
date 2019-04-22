import { ITokenConfig,createToken } from "chevrotain"

const IS: ITokenConfig = {
    label: "IS bitwise operator",
    name: "is",
    pattern: /IS/
};

export default createToken(IS);