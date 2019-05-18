import { ITokenConfig , createToken } from "chevrotain";

const PARENT: ITokenConfig = {
    name: "PARENT key word",
    label: "parent",
    pattern: /PARENT/
};

export default createToken(PARENT);