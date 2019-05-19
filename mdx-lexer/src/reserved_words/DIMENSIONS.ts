import { ITokenConfig , createToken } from "chevrotain";

const DIMENSIONS: ITokenConfig = {
    name: "DIMENSIONS",
    label: "dimensions",
    pattern: /DIMENSIONS/
};

export default createToken(DIMENSIONS);