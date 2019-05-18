import { ITokenConfig , createToken } from "chevrotain";

const CACHE: ITokenConfig = {
    name: "CACHE key word",
    label: "cache",
    pattern: /CACHE/
};

export default createToken(CACHE);