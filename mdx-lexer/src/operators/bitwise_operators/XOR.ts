import { ITokenConfig, createToken } from "chevrotain"

const XOR: ITokenConfig = {
    name: "XOR bitwise operator",
    label: "xor",
    pattern: /XOR/
};

export default createToken(XOR);