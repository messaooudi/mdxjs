import { ITokenConfig } from "chevrotain"

const NON: ITokenConfig = {
    label: "NON key word",
    name: "non",
    pattern: /NON/
};

export default createToken(NON);