import { ITokenConfig, createToken } from "chevrotain";

const DIGIT: ITokenConfig = {
    label: "digit number",
    name: "digit",
    pattern: /\d+/
};

export default createToken(DIGIT);