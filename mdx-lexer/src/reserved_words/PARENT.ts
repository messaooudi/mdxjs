import { ITokenConfig , createToken } from "chevrotain";

const PARENT: ITokenConfig = {
    label: "PARENT key word",
    name: "parent",
    pattern: /PARENT/
};

export default createToken(PARENT);