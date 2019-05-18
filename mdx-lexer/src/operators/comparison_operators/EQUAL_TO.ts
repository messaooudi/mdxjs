import { ITokenConfig, createToken } from "chevrotain";
import ASSIGNMENT from "../assignment_operators"

const EQUAL_TO: ITokenConfig = {
    name: "EQUAL_TO comparison operator",
    label: "equal to",
    pattern: /=/,
    categories : [ASSIGNMENT.ASSIGNMENT],
};

export default createToken(EQUAL_TO);