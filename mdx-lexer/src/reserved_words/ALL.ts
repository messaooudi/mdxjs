import { ITokenConfig , createToken } from "chevrotain";;
import ALLMEMBERS from "./ALLMEMBERS";

const ALL: ITokenConfig = {
    label: "ALL key word",
    name: "all",
    pattern: /ALL/,
    longer_alt : ALLMEMBERS
};

export default createToken(ALL);