import { ITokenConfig , createToken } from "chevrotain";

const DISTINCT: ITokenConfig = {
    name: "DISTINCT",
    label: "distinct",
    pattern: /DISTINCT/
};

export default createToken(DISTINCT);