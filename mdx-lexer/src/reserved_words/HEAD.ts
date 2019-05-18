import { ITokenConfig , createToken } from "chevrotain";

const HEAD: ITokenConfig = {
    name: "HEAD key word",
    label: "head",
    pattern: /HEAD/
};

export default createToken(HEAD);