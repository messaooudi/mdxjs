import { ITokenConfig , createToken } from "chevrotain";

const TREE: ITokenConfig = {
    name: "TREE",
    label: "tree",
    pattern: /TREE/
};

export default createToken(TREE);