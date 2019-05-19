import { ITokenConfig , createToken } from "chevrotain";

const RELATIVE: ITokenConfig = {
    name: "RELATIVE",
    label: "relative",
    pattern: /RELATIVE/
};

export default createToken(RELATIVE);