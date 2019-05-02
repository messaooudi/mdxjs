import { ITokenConfig, createToken } from "chevrotain";

const LEFT_BRACE: ITokenConfig = {
    label: "left brace symbol",
    name: "left brace",
    pattern: /{/
};

export default createToken(LEFT_BRACE);