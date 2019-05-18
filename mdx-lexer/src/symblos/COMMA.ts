import { ITokenConfig, createToken } from "chevrotain";

const COMMA: ITokenConfig = {
    name: "comma symbol",
    label: "comma",
    pattern: /,/
};

export default createToken(COMMA);