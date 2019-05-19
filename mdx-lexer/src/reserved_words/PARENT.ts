import { ITokenConfig , createToken } from "chevrotain";

const PARENT: ITokenConfig = {
    name: "PARENT",
    label: "parent",
    pattern: /PARENT/
};

export default createToken(PARENT);