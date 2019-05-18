import { ITokenConfig , createToken } from "chevrotain";

const CHILDREN: ITokenConfig = {
    name: "CHILDREN key word",
    label: "children",
    pattern: /CHILDREN/
};

export default createToken(CHILDREN);