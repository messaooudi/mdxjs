import { ITokenConfig , createToken } from "chevrotain";;
import ALLMEMBERS from "./ALLMEMBERS";

const ALL: ITokenConfig = {
    name: "ALL key word",
    label: "all",
    pattern: /ALL/,
    longer_alt : ALLMEMBERS
};

export default createToken(ALL);