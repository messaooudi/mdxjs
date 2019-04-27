import { ITokenConfig , createToken } from "chevrotain";

const FIRSTSIBLING: ITokenConfig = {
    label: "FIRSTSIBLING key word",
    name: "first sibling",
    pattern: /FIRSTSIBLING/
};

export default createToken(FIRSTSIBLING);