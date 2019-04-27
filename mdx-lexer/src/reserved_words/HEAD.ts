import { ITokenConfig } from "chevrotain"

const HEAD: ITokenConfig = {
    label: "HEAD key word",
    name: "head",
    pattern: /HEAD/
};

export default createToken(HEAD);