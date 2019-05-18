import { ITokenConfig , createToken } from "chevrotain";

const SUM: ITokenConfig = {
    name: "SUM key word",
    label: "sum",
    pattern: /SUM/
};

export default createToken(SUM);