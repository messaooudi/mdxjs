import { ITokenConfig, createToken } from "chevrotain";
import numbers from "../numbers"

const DOT: ITokenConfig = {
    label: "dot symbol",
    name: "dot",
    pattern: /\./,
    longer_alt : numbers.DECIMAL
};

export default createToken(DOT);