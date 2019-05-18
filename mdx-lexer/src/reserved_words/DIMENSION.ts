import { ITokenConfig , createToken } from "chevrotain";

const DIMENSION: ITokenConfig = {
    name: "DIMENSION key word",
    label: "dimension",
    pattern: /DIMENSION/
};

export default createToken(DIMENSION);