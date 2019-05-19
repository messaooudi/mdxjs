import { ITokenConfig , createToken } from "chevrotain";

const SUM: ITokenConfig = {
    name: "SUM",
    label: "sum",
    pattern: /SUM/
};

export default createToken(SUM);