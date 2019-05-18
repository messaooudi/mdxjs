import { ITokenConfig , createToken } from "chevrotain";

const DISTINCT: ITokenConfig = {
    name: "DISTINCT key word",
    label: "distinct",
    pattern: /DISTINCT/
};

export default createToken(DISTINCT);