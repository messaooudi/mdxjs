import { ITokenConfig , createToken } from "chevrotain";

const HEAD: ITokenConfig = {
    name: "HEAD",
    label: "head",
    pattern: /HEAD/
};

export default createToken(HEAD);