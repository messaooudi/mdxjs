import { ITokenConfig, createToken } from "chevrotain";

const COLON: ITokenConfig = {
    name: "colon symbol",
    label: "colon",
    pattern: /:/
};

export default createToken(COLON);