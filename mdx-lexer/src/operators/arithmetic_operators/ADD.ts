import { ITokenConfig,createToken } from "chevrotain";
import concatenation_operators from "../concatenation_operators";
import unary_operators from "../unary_operators";

const ADD: ITokenConfig = {
    label: "ADD arethmetic operator",
    name: "add",
    pattern: /\+/,
    categories : [concatenation_operators.CONCATENATION,unary_operators.POSITIVE]
};

export default createToken(ADD);