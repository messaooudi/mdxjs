import { ITokenConfig , createToken } from "chevrotain";

const XOR: ITokenConfig = {
    name: "XOR",
    label: "xor",
    pattern: /XOR/
};

export default createToken(XOR);