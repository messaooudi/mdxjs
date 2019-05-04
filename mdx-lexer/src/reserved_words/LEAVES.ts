import { ITokenConfig , createToken } from "chevrotain";

const LEAVES: ITokenConfig = {
    label: "LEAVES key word",
    name: "leaves",
    pattern: /LEAVES/
};

export default createToken(LEAVES);