import { ITokenConfig } from "chevrotain";
import ASC from "./ASC";

const AS: ITokenConfig = {
    label: "AS key word",
    name: "as",
    pattern: /AS/,
    longer_alt : ASC
};

export default createToken(AS);