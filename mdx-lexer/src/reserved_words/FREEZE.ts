import { ITokenConfig } from "chevrotain"

const FREEZE: ITokenConfig = {
    label: "FREEZE key word",
    name: "freeze",
    pattern: /FREEZE/
};

export default createToken(FREEZE);