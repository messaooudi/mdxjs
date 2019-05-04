import { ITokenConfig , createToken } from "chevrotain";

const TREE: ITokenConfig = {
    label: "TREE key word",
    name: "tree",
    pattern: /TREE/
};

export default createToken(TREE);