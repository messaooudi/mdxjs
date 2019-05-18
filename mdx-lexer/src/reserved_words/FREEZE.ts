import { ITokenConfig , createToken } from "chevrotain";

const FREEZE: ITokenConfig = {
    name: "FREEZE key word",
    label: "freeze",
    pattern: /FREEZE/
};

export default createToken(FREEZE);