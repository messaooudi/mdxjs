import { ITokenConfig , createToken } from "chevrotain";

const DIMENSION: ITokenConfig = {
    name: "DIMENSION",
    label: "dimension",
    pattern: /DIMENSION/
};

export default createToken(DIMENSION);