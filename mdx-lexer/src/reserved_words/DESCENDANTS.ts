import { ITokenConfig , createToken } from "chevrotain";

const DESCENDANTS: ITokenConfig = {
    label: "DESCENDANTS key word",
    name: "descendants",
    pattern: /DESCENDANTS/
};

export default createToken(DESCENDANTS);