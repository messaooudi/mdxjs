import { ITokenConfig , createToken } from "chevrotain";

const CELLFORMULASETLIST: ITokenConfig = {
    label: "CELLFORMULASETLIST key word",
    name: "cell formula as set list",
    pattern: /CELLFORMULASETLIST/
};

export default createToken(CELLFORMULASETLIST);