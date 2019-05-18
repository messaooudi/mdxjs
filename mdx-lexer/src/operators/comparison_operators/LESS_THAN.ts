import { ITokenConfig, createToken } from "chevrotain"
import LESS_THAN_OR_EQUAL from "./LESS_THAN_OR_EQUAL"

const LESS_THAN: ITokenConfig = {
    name: "LESS_THAN comparison operator",
    label: "less than",
    pattern: /</,
    longer_alt : LESS_THAN_OR_EQUAL
};

export default createToken(LESS_THAN);