import { ITokenConfig , createToken } from "chevrotain";

const COUSIN: ITokenConfig = {
    name: "COUSIN",
    label: "cousin",
    pattern: /COUSIN/
};

export default createToken(COUSIN);