import { ITokenConfig, createToken } from "chevrotain";

const AMPERSAND: ITokenConfig = {
    name: "ampersand symbol",
    label: "ampersand",
    pattern: /&/
};

export default createToken(AMPERSAND);