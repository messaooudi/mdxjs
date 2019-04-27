import { ITokenConfig , createToken } from "chevrotain";

const BOTTOMCOUNT: ITokenConfig = {
    label: "BOTTOMCOUNT key word",
    name: "bottom count",
    pattern: /BOTTOMCOUNT/
};

export default createToken(BOTTOMCOUNT);