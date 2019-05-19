import { ITokenConfig , createToken } from "chevrotain";

const FREEZE: ITokenConfig = {
    name: "FREEZE",
    label: "freeze",
    pattern: /FREEZE/
};

export default createToken(FREEZE);