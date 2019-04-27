import { ITokenConfig } from "chevrotain"

const DISTINCT: ITokenConfig = {
    label: "DISTINCT key word",
    name: "distinct",
    pattern: /DISTINCT/
};

export default createToken(DISTINCT);