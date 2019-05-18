import { ITokenConfig , createToken } from "chevrotain";

const ASCENDANTS: ITokenConfig = {
    name: "ASCENDANTS key word",
    label: "ascendants",
    pattern: /ASCENDANTS/
};

export default createToken(ASCENDANTS);