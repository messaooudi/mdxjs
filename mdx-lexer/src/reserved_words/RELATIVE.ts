import { ITokenConfig } from "chevrotain"

const RELATIVE: ITokenConfig = {
    label: "RELATIVE key word",
    name: "relative",
    pattern: /RELATIVE/
};

export default createToken(RELATIVE);