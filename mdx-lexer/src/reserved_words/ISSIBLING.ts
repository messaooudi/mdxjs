import { ITokenConfig , createToken } from "chevrotain";

const ISSIBLING: ITokenConfig = {
    name: "ISSIBLING key word",
    label: "is sibling",
    pattern: /ISSIBLING/
};

export default createToken(ISSIBLING);