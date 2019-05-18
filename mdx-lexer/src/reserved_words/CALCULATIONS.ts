import { ITokenConfig , createToken } from "chevrotain";

const CALCULATIONS: ITokenConfig = {
    name: "CALCULATIONS key word",
    label: "calculations",
    pattern: /CALCULATIONS/
};

export default createToken(CALCULATIONS);