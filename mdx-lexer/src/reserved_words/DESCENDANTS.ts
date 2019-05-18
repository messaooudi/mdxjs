import { ITokenConfig , createToken } from "chevrotain";

const DESCENDANTS: ITokenConfig = {
    name: "DESCENDANTS key word",
    label: "descendants",
    pattern: /DESCENDANTS/
};

export default createToken(DESCENDANTS);