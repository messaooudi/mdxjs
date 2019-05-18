import { ITokenConfig, createToken } from "chevrotain";

const SIMPLE_QUOTE: ITokenConfig = {
    name: "simple quote symbol",
    label: "simple quote",
    pattern: /\'/
};

export default createToken(SIMPLE_QUOTE);