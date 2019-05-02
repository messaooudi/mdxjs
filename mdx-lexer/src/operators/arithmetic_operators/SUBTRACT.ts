import { ITokenConfig,createToken } from "chevrotain"
import unary_operators from "../unary_operators";
import set_operators  from "../set_operators";

const SUBTRACT: ITokenConfig = {
    label: "SUBTRACT arethmetic operator",
    name: "subtract",
    pattern: /-/,
    categories : [unary_operators.NEGATIVE,set_operators.EXCEPT]
};

export default createToken(SUBTRACT);