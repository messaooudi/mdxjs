import { ITokenConfig , createToken } from "chevrotain";

const CALCULATIONS: ITokenConfig = {
    name: "CALCULATIONS",
    label: "calculations",
    pattern: /CALCULATIONS/
};

export default createToken(CALCULATIONS);