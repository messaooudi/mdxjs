import { ITokenConfig, createToken } from "chevrotain";

const RIGHT_BRACE: ITokenConfig = {
    name: "RIGHT_BRACE",
    label: "right brace",
    pattern: /}/
};

export default createToken(RIGHT_BRACE);