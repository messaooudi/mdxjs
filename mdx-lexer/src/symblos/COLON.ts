import { ITokenConfig, createToken } from "chevrotain";

const COLON: ITokenConfig = {
    name: "colon",
    label: "colon",
    pattern: /:/
};

export default createToken(COLON);