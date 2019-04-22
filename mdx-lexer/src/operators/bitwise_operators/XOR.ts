import { ITokenConfig, createToken } from "chevrotain"

const XOR: ITokenConfig = {
    label: "XOR bitwise operator",
    name: "xor",
    pattern: /XOR/
};

export default createToken(XOR);