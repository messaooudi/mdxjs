import { ITokenConfig , createToken } from "chevrotain";

const LASTSIBLING: ITokenConfig = {
    name: "LASTSIBLING key word",
    label: "last sibling",
    pattern: /LASTSIBLING/
};

export default createToken(LASTSIBLING);