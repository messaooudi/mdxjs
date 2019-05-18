import { ITokenConfig , createToken } from "chevrotain";

const CALCULATE: ITokenConfig = {
    name: "CALCULATE key word",
    label: "calculate",
    pattern: /CALCULATE/
};

export default createToken(CALCULATE);