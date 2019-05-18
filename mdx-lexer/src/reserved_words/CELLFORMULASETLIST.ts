import { ITokenConfig , createToken } from "chevrotain";

const CELLFORMULASETLIST: ITokenConfig = {
    name: "CELLFORMULASETLIST",
    label: "cell formula as set list",
    pattern: /CELLFORMULASETLIST/
};

export default createToken(CELLFORMULASETLIST);