import { ITokenConfig , createToken } from "chevrotain";

const ROLLUPCHILDREN: ITokenConfig = {
    label: "ROLLUPCHILDREN key word",
    name: "rollup children",
    pattern: /ROLLUPCHILDREN/
};

export default createToken(ROLLUPCHILDREN);