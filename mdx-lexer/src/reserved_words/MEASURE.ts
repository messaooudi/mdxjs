import { ITokenConfig , createToken } from "chevrotain";

const MEASURE: ITokenConfig = {
    name: "MEASURE key word",
    label: "measure",
    pattern: /MEASURE/
};

export default createToken(MEASURE);