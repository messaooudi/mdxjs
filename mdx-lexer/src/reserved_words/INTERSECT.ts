import { ITokenConfig , createToken } from "chevrotain";

const INTERSECT: ITokenConfig = {
    name: "INTERSECT key word",
    label: "intersect",
    pattern: /INTERSECT/
};

export default createToken(INTERSECT);