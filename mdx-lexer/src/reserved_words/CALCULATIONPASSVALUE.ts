import { ITokenConfig , createToken } from "chevrotain";

const CALCULATIONPASSVALUE: ITokenConfig = {
    name: "CALCULATIONPASSVALUE key word",
    label: "calculation pass value",
    pattern: /CALCULATIONPASSVALUE/
};

export default createToken(CALCULATIONPASSVALUE);