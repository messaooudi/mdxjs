import { ITokenConfig , createToken } from "chevrotain";

const BOTTOMCOUNT: ITokenConfig = {
    name: "BOTTOMCOUNT key word",
    label: "bottom count",
    pattern: /BOTTOMCOUNT/
};

export default createToken(BOTTOMCOUNT);