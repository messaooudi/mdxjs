import { ITokenConfig , createToken } from "chevrotain";

const LEAVES: ITokenConfig = {
    name: "LEAVES key word",
    label: "leaves",
    pattern: /LEAVES/
};

export default createToken(LEAVES);