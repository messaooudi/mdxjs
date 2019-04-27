import { ITokenConfig } from "chevrotain"

const VALIDMEASURE: ITokenConfig = {
    label: "VALIDMEASURE key word",
    name: "valid measure",
    pattern: /VALIDMEASURE/
};

export default createToken(VALIDMEASURE);