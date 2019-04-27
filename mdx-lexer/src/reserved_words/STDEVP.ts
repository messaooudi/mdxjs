import { ITokenConfig } from "chevrotain"

const STDEVP: ITokenConfig = {
    label: "STDEVP key word",
    name: "stdevp",
    pattern: /STDEVP/
};

export default createToken(STDEVP);