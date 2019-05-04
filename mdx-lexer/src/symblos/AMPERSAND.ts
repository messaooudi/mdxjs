import { ITokenConfig, createToken } from "chevrotain";

const AMPERSAND: ITokenConfig = {
    label: "ampersand symbol",
    name: "ampersand",
    pattern: /&/
};

export default createToken(AMPERSAND);