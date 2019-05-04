import { ITokenConfig , createToken } from "chevrotain";

const DIMENSION: ITokenConfig = {
    label: "DIMENSION key word",
    name: "dimension",
    pattern: /DIMENSION/
};

export default createToken(DIMENSION);