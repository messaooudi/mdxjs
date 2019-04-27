import { ITokenConfig , createToken } from "chevrotain";

const LASTSIBLING: ITokenConfig = {
    label: "LASTSIBLING key word",
    name: "last sibling",
    pattern: /LASTSIBLING/
};

export default createToken(LASTSIBLING);