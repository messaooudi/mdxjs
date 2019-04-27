import { ITokenConfig } from "chevrotain"

const ISSIBLING: ITokenConfig = {
    label: "ISSIBLING key word",
    name: "is sibling",
    pattern: /ISSIBLING/
};

export default createToken(ISSIBLING);