import { ITokenConfig, createToken } from "chevrotain"

const EQUAL_TO: ITokenConfig = {
    label: "EQUAL_TO comparison operator",
    name: "equal to",
    pattern: /=/
};

export default createToken(EQUAL_TO);