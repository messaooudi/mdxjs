import { ITokenConfig , createToken } from "chevrotain";

const ROOT: ITokenConfig = {
    name: "ROOT",
    label: "root",
    pattern: /ROOT/
};

export default createToken(ROOT);