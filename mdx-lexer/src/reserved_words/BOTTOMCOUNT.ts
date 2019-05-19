import { ITokenConfig , createToken } from "chevrotain";

const BOTTOMCOUNT: ITokenConfig = {
    name: "BOTTOMCOUNT",
    label: "bottom count",
    pattern: /BOTTOMCOUNT/
};

export default createToken(BOTTOMCOUNT);