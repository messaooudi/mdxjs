import { ITokenConfig, createToken } from "chevrotain";

const RIGHT_BRACE: ITokenConfig = {
    name: "right brace symbol",
    label: "right brace",
    pattern: /}/
};

export default createToken(RIGHT_BRACE);