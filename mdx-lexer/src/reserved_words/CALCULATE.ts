import { ITokenConfig , createToken } from "chevrotain";

const CALCULATE: ITokenConfig = {
    name: "CALCULATE",
    label: "calculate",
    pattern: /CALCULATE/
};

export default createToken(CALCULATE);