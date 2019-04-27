import { ITokenConfig , createToken } from "chevrotain";

const COUSIN: ITokenConfig = {
    label: "COUSIN key word",
    name: "cousin",
    pattern: /COUSIN/
};

export default createToken(COUSIN);