import { ITokenConfig , createToken } from "chevrotain";;
import ASC from "./ASC";

const AS: ITokenConfig = {
    name: "AS",
    label: "as",
    pattern: /AS/,
    longer_alt : ASC
};

export default createToken(AS);