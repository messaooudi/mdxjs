import { ITokenConfig , createToken } from "chevrotain";

const FIRSTCHILD: ITokenConfig = {
    name: "FIRSTCHILD key word",
    label: "first child",
    pattern: /FIRSTCHILD/
};

export default createToken(FIRSTCHILD);