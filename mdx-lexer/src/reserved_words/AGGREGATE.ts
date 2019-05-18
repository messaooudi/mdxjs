import { ITokenConfig , createToken } from "chevrotain";

const AGGREGATE: ITokenConfig = {
    name: "AGGREGATE",
    label: "aggregate",
    pattern: /AGGREGATE/
};

export default createToken(AGGREGATE);