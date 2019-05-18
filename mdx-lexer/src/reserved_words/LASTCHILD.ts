import { ITokenConfig , createToken } from "chevrotain";

const LASTCHILD: ITokenConfig = {
    name: "LASTCHILD key word",
    label: "last child",
    pattern: /LASTCHILD/
};

export default createToken(LASTCHILD);