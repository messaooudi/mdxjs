import { ITokenConfig , createToken } from "chevrotain";;
import ALLMEMBERS from "./ALLMEMBERS";

const ALL: ITokenConfig = {
    name: "ALL",
    label: "all",
    pattern: /ALL/,
    longer_alt : ALLMEMBERS
};

export default createToken(ALL);