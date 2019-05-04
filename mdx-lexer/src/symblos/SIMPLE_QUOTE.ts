import { ITokenConfig, createToken } from "chevrotain";

const SIMPLE_QUOTE: ITokenConfig = {
    label: "simple quote symbol",
    name: "simple quote",
    pattern: /\'/
};

export default createToken(SIMPLE_QUOTE);