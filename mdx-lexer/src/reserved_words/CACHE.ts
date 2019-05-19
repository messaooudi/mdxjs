import { ITokenConfig , createToken } from "chevrotain";

const CACHE: ITokenConfig = {
    name: "CACHE",
    label: "cache",
    pattern: /CACHE/
};

export default createToken(CACHE);