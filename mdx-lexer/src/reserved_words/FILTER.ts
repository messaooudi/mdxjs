import { ITokenConfig , createToken } from "chevrotain";

const FILTER: ITokenConfig = {
    name: "FILTER key word",
    label: "filter",
    pattern: /FILTER/
};

export default createToken(FILTER);