import { ITokenConfig , createToken } from "chevrotain";

const FIRSTSIBLING: ITokenConfig = {
    name: "FIRSTSIBLING key word",
    label: "first sibling",
    pattern: /FIRSTSIBLING/
};

export default createToken(FIRSTSIBLING);