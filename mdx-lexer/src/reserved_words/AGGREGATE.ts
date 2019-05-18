import { ITokenConfig , createToken } from "chevrotain";

const AGGREGATE: ITokenConfig = {
    name: "AGGREGATE key word",
    label: "aggregate",
    pattern: /AGGREGATE/
};

export default createToken(AGGREGATE);