import { ITokenConfig , createToken } from "chevrotain";

const AVERAGE: ITokenConfig = {
    name: "AVERAGE key word",
    label: "average",
    pattern: /AVERAGE/
};

export default createToken(AVERAGE);