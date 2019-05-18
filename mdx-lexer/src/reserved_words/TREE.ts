import { ITokenConfig , createToken } from "chevrotain";

const TREE: ITokenConfig = {
    name: "TREE key word",
    label: "tree",
    pattern: /TREE/
};

export default createToken(TREE);