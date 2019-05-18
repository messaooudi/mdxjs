import { ITokenConfig , createToken } from "chevrotain";

const RECURSIVE: ITokenConfig = {
    name: "RECURSIVE key word",
    label: "recursive",
    pattern: /RECURSIVE/
};

export default createToken(RECURSIVE);