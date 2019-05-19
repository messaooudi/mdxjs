import { ITokenConfig , createToken } from "chevrotain";

const CALCULATIONPASSVALUE: ITokenConfig = {
    name: "CALCULATIONPASSVALUE",
    label: "calculation pass value",
    pattern: /CALCULATIONPASSVALUE/
};

export default createToken(CALCULATIONPASSVALUE);