import { ITokenConfig , createToken } from "chevrotain";

const STDEVP: ITokenConfig = {
    name: "STDEVP key word",
    label: "stdevp",
    pattern: /STDEVP/
};

export default createToken(STDEVP);