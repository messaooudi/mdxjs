import { ITokenConfig , createToken } from "chevrotain";

const AVERAGE: ITokenConfig = {
    name: "AVERAGE",
    label: "average",
    pattern: /AVERAGE/
};

export default createToken(AVERAGE);