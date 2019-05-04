import { ITokenConfig , createToken } from "chevrotain";

const RECURSIVE: ITokenConfig = {
    label: "RECURSIVE key word",
    name: "recursive",
    pattern: /RECURSIVE/
};

export default createToken(RECURSIVE);