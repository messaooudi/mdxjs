import { ITokenConfig } from "chevrotain";
import DELIMITED_IDENTIFIER from "./DELIMITED_IDENTIFIER";

const REGULAR_IDENTIFIER: ITokenConfig = {
    label: "REGULAR_IDENTIFIER identifier",
    name: "regular identifies",
    pattern: /^[a-zA-Z_][a-zA-Z_0-9]{0,100}/,
    longer_alt : DELIMITED_IDENTIFIER
};

export default REGULAR_IDENTIFIER;