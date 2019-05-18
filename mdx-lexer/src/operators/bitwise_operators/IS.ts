import { ITokenConfig,createToken } from "chevrotain"

const IS: ITokenConfig = {
    name: "IS bitwise operator",
    label: "is",
    pattern: /IS/
};

export default createToken(IS);