import { ITokenConfig , createToken } from "chevrotain";

const RELATIVE: ITokenConfig = {
    name: "RELATIVE key word",
    label: "relative",
    pattern: /RELATIVE/
};

export default createToken(RELATIVE);