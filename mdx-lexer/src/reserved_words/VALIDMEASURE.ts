import { ITokenConfig , createToken } from "chevrotain";

const VALIDMEASURE: ITokenConfig = {
    name: "VALIDMEASURE key word",
    label: "valid measure",
    pattern: /VALIDMEASURE/
};

export default createToken(VALIDMEASURE);