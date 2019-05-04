import { ITokenConfig, createToken } from "chevrotain";

const COLON: ITokenConfig = {
    label: "colon symbol",
    name: "colon",
    pattern: /:/
};

export default createToken(COLON);