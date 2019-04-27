import { ITokenConfig , createToken } from "chevrotain";

const FIRSTCHILD: ITokenConfig = {
    label: "FIRSTCHILD key word",
    name: "first child",
    pattern: /FIRSTCHILD/
};

export default createToken(FIRSTCHILD);