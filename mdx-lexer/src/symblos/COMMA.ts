import { ITokenConfig, createToken } from "chevrotain";

const COMMA: ITokenConfig = {
    label: "comma symbol",
    name: "comma",
    pattern: /,/
};

export default createToken(COMMA);