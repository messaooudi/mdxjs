import { ITokenConfig , createToken } from "chevrotain";

const CALCULATIONPASSVALUE: ITokenConfig = {
    label: "CALCULATIONPASSVALUE key word",
    name: "calculation pass value",
    pattern: /CALCULATIONPASSVALUE/
};

export default createToken(CALCULATIONPASSVALUE);