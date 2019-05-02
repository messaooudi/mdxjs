import { ITokenConfig, createToken } from "chevrotain";

const RIGHT_BRACE: ITokenConfig = {
    label: "right brace symbol",
    name: "right brace",
    pattern: /}/
};

export default createToken(RIGHT_BRACE);