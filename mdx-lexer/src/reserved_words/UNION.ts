import { ITokenConfig , createToken } from "chevrotain";

const UNION: ITokenConfig = {
    name: "UNION",
    label: "union",
    pattern: /UNION/
};

export default createToken(UNION);