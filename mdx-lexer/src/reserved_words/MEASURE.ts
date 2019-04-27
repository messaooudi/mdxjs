import { ITokenConfig , createToken } from "chevrotain";

const MEASURE: ITokenConfig = {
    label: "MEASURE key word",
    name: "measure",
    pattern: /MEASURE/
};

export default createToken(MEASURE);