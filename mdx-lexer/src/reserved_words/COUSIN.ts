import { ITokenConfig , createToken } from "chevrotain";

const COUSIN: ITokenConfig = {
    name: "COUSIN key word",
    label: "cousin",
    pattern: /COUSIN/
};

export default createToken(COUSIN);