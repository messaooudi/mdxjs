import { ITokenConfig , createToken } from "chevrotain";;
import ANCESTORS from "./ANCESTORS";

const ANCESTOR: ITokenConfig = {
    label: "ANCESTOR key word",
    name: "ancestor",
    pattern: /ANCESTOR/,
    longer_alt:ANCESTORS
};

export default createToken(ANCESTOR);