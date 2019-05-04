import { ITokenConfig, createToken } from "chevrotain";
import ASSIGNMENT from "../assignment_operators"

const EQUAL_TO: ITokenConfig = {
    label: "EQUAL_TO comparison operator",
    name: "equal to",
    pattern: /=/,
    categories : [ASSIGNMENT.ASSIGNMENT],
};

export default createToken(EQUAL_TO);