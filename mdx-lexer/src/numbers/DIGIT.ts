import { ITokenConfig, createToken } from "chevrotain";

const DIGIT: ITokenConfig = {
    name: "digit",
    label: "digit",
    pattern: /\d+/
};

export default createToken(DIGIT);