import { ITokenConfig , createToken } from "chevrotain";

const ISSIBLING: ITokenConfig = {
    name: "ISSIBLING",
    label: "is sibling",
    pattern: /ISSIBLING/
};

export default createToken(ISSIBLING);