import { ITokenConfig, createToken } from "chevrotain";

const LEFT_BRACE: ITokenConfig = {
    name: "LEFT_BRACE",
    label: "left brace",
    pattern: /{/
};

export default createToken(LEFT_BRACE);