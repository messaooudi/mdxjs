import { ITokenConfig , createToken } from "chevrotain";

const FIRSTCHILD: ITokenConfig = {
    name: "FIRSTCHILD",
    label: "first child",
    pattern: /FIRSTCHILD/
};

export default createToken(FIRSTCHILD);