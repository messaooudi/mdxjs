import { ITokenConfig , createToken } from "chevrotain";

const LASTCHILD: ITokenConfig = {
    label: "LASTCHILD key word",
    name: "last child",
    pattern: /LASTCHILD/
};

export default createToken(LASTCHILD);