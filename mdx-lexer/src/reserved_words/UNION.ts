import { ITokenConfig , createToken } from "chevrotain";

const UNION: ITokenConfig = {
    name: "UNION key word",
    label: "union",
    pattern: /UNION/
};

export default createToken(UNION);