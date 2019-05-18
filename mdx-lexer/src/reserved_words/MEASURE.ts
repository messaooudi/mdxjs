import { ITokenConfig , createToken } from "chevrotain";

const MEASURE: ITokenConfig = {
    name: "MEASURE",
    label: "measure",
    pattern: /MEASURE/
};

export default createToken(MEASURE);