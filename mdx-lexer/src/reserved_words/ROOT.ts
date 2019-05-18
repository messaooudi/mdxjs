import { ITokenConfig , createToken } from "chevrotain";

const ROOT: ITokenConfig = {
    name: "ROOT key word",
    label: "root",
    pattern: /ROOT/
};

export default createToken(ROOT);