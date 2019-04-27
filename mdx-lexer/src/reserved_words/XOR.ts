import { ITokenConfig , createToken } from "chevrotain";

const XOR: ITokenConfig = {
    label: "XOR key word",
    name: "xor",
    pattern: /XOR/
};

export default createToken(XOR);