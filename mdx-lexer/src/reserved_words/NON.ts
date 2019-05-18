import { ITokenConfig , createToken } from "chevrotain";

const NON: ITokenConfig = {
    name: "NON key word",
    label: "non",
    pattern: /NON/
};

export default createToken(NON);