import { ITokenConfig, createToken } from "chevrotain";

const DOUBLE_QUOTE: ITokenConfig = {
    label: "double quote symbol",
    name: "double quote",
    pattern: /\"/
};

export default createToken(DOUBLE_QUOTE);