import { ITokenConfig , createToken } from "chevrotain";

const LEAVES: ITokenConfig = {
    name: "LEAVES",
    label: "leaves",
    pattern: /LEAVES/
};

export default createToken(LEAVES);