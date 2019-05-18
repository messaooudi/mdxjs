import { ITokenConfig , createToken } from "chevrotain";

const ASCENDANTS: ITokenConfig = {
    name: "ASCENDANTS",
    label: "ascendants",
    pattern: /ASCENDANTS/
};

export default createToken(ASCENDANTS);