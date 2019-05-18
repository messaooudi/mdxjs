import { ITokenConfig, createToken } from "chevrotain";

const DOUBLE_QUOTE: ITokenConfig = {
    name: "double quote symbol",
    label: "double quote",
    pattern: /\"/
};

export default createToken(DOUBLE_QUOTE);