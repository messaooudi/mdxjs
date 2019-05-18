import { ITokenConfig , createToken } from "chevrotain";

const ROLLUPCHILDREN: ITokenConfig = {
    name: "ROLLUPCHILDREN key word",
    label: "rollup children",
    pattern: /ROLLUPCHILDREN/
};

export default createToken(ROLLUPCHILDREN);