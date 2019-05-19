import { ITokenConfig, createToken } from "chevrotain";

const SIMPLE_QUOTE: ITokenConfig = {
    name: "SIMPLE_QUOTE",
    label: "simple quote",
    pattern: /\'/
};

export default createToken(SIMPLE_QUOTE);