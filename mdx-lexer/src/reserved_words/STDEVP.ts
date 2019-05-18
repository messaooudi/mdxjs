import { ITokenConfig , createToken } from "chevrotain";

const STDEVP: ITokenConfig = {
    name: "STDEVP",
    label: "stdevp",
    pattern: /STDEVP/
};

export default createToken(STDEVP);