import { ITokenConfig } from "chevrotain"

const ASCENDANTS: ITokenConfig = {
    label: "ASCENDANTS key word",
    name: "ascendants",
    pattern: /ASCENDANTS/
};

export default createToken(ASCENDANTS);