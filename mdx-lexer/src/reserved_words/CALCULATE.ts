import { ITokenConfig } from "chevrotain"

const CALCULATE: ITokenConfig = {
    label: "CALCULATE key word",
    name: "calculate",
    pattern: /CALCULATE/
};

export default createToken(CALCULATE);