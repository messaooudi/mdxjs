import { ITokenConfig , createToken } from "chevrotain";

const VALIDMEASURE: ITokenConfig = {
    name: "VALIDMEASURE",
    label: "valid measure",
    pattern: /VALIDMEASURE/
};

export default createToken(VALIDMEASURE);