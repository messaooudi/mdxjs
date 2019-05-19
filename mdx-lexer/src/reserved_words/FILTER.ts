import { ITokenConfig , createToken } from "chevrotain";

const FILTER: ITokenConfig = {
    name: "FILTER",
    label: "filter",
    pattern: /FILTER/
};

export default createToken(FILTER);