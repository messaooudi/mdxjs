import { ITokenConfig , createToken } from "chevrotain";

const CHILDREN: ITokenConfig = {
    name: "CHILDREN",
    label: "children",
    pattern: /CHILDREN/
};

export default createToken(CHILDREN);