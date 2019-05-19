import { ITokenConfig,createToken } from "chevrotain";
import concatenation_operators from "../concatenation_operators";
import unary_operators from "../unary_operators";

const ADD: ITokenConfig = {
    name: "ADD",
    label: "add",
    pattern: /\+/,
    categories : [concatenation_operators.CONCATENATION,unary_operators.POSITIVE]
};

export default createToken(ADD);