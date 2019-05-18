import { ITokenConfig , createToken } from "chevrotain";;
import ANCESTORS from "./ANCESTORS";

const ANCESTOR: ITokenConfig = {
    name: "ANCESTOR key word",
    label: "ancestor",
    pattern: /ANCESTOR/,
    longer_alt:ANCESTORS
};

export default createToken(ANCESTOR);