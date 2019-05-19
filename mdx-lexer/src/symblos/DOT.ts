import { ITokenConfig, createToken } from "chevrotain";
import numbers from "../numbers"

const DOT: ITokenConfig = {
    name: "dot",
    label: "dot",
    pattern: /\./,
    longer_alt : numbers.DECIMAL
};

export default createToken(DOT);