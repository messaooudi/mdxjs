import { ITokenConfig, createToken } from "chevrotain";

const AMPERSAND: ITokenConfig = {
    name: "ampersand",
    label: "ampersand",
    pattern: /&/
};

export default createToken(AMPERSAND);