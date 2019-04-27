import { ITokenConfig } from "chevrotain"

const CALCULATIONS: ITokenConfig = {
    label: "CALCULATIONS key word",
    name: "calculations",
    pattern: /CALCULATIONS/
};

export default createToken(CALCULATIONS);