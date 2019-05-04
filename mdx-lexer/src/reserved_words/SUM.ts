import { ITokenConfig , createToken } from "chevrotain";

const SUM: ITokenConfig = {
    label: "SUM key word",
    name: "sum",
    pattern: /SUM/
};

export default createToken(SUM);