import { ITokenConfig, createToken } from "chevrotain";

const COMMA: ITokenConfig = {
    name: "comma",
    label: "comma",
    pattern: /,/
};

export default createToken(COMMA);