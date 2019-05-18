import { ITokenConfig, createToken } from "chevrotain";

const DIGIT: ITokenConfig = {
    name: "digit number",
    label: "digit",
    pattern: /\d+/
};

export default createToken(DIGIT);