import { ITokenConfig , createToken } from "chevrotain";

const DESCENDANTS: ITokenConfig = {
    name: "DESCENDANTS",
    label: "descendants",
    pattern: /DESCENDANTS/
};

export default createToken(DESCENDANTS);