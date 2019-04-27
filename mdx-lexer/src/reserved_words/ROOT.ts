import { ITokenConfig , createToken } from "chevrotain";

const ROOT: ITokenConfig = {
    label: "ROOT key word",
    name: "root",
    pattern: /ROOT/
};

export default createToken(ROOT);