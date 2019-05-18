import { ITokenConfig , createToken } from "chevrotain";

const XOR: ITokenConfig = {
    name: "XOR key word",
    label: "xor",
    pattern: /XOR/
};

export default createToken(XOR);