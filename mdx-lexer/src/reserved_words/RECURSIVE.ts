import { ITokenConfig , createToken } from "chevrotain";

const RECURSIVE: ITokenConfig = {
    name: "RECURSIVE",
    label: "recursive",
    pattern: /RECURSIVE/
};

export default createToken(RECURSIVE);