import { ITokenConfig , createToken } from "chevrotain";

const NON: ITokenConfig = {
    name: "NON",
    label: "non",
    pattern: /NON/
};

export default createToken(NON);