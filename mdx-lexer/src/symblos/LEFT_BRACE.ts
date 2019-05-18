import { ITokenConfig, createToken } from "chevrotain";

const LEFT_BRACE: ITokenConfig = {
    name: "left brace symbol",
    label: "left brace",
    pattern: /{/
};

export default createToken(LEFT_BRACE);