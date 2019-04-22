import { ITokenConfig, createToken } from "chevrotain";
import GREATER_THAN_OR_EQUAL from "./GREATER_THAN_OR_EQUAL";

const GREATER_THAN: ITokenConfig = {
    label: "GREATER_THAN comparison operator",
    name: "greater than",
    pattern: />/,
    longer_alt: GREATER_THAN_OR_EQUAL
};

export default createToken(GREATER_THAN);