import { ITokenConfig, createToken } from "chevrotain";

const DOUBLE_QUOTE: ITokenConfig = {
    name: "DOUBLE_QUOTE",
    label: "double quote",
    pattern: /\"/
};

export default createToken(DOUBLE_QUOTE);