import { ITokenConfig , createToken } from "chevrotain";

const INTERSECT: ITokenConfig = {
    name: "INTERSECT",
    label: "intersect",
    pattern: /INTERSECT/
};

export default createToken(INTERSECT);