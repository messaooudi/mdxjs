import { ITokenConfig } from "chevrotain"

const UNION: ITokenConfig = {
    label: "UNION key word",
    name: "union",
    pattern: /UNION/
};

export default createToken(UNION);