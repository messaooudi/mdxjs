import { ITokenConfig , createToken } from "chevrotain";

const LASTCHILD: ITokenConfig = {
    name: "LASTCHILD",
    label: "last child",
    pattern: /LASTCHILD/
};

export default createToken(LASTCHILD);