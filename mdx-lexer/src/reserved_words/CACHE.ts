import { ITokenConfig } from "chevrotain"

const CACHE: ITokenConfig = {
    label: "CACHE key word",
    name: "cache",
    pattern: /CACHE/
};

export default createToken(CACHE);