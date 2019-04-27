import { ITokenConfig , createToken } from "chevrotain";

const DIMENSIONS: ITokenConfig = {
    label: "DIMENSIONS key word",
    name: "dimensions",
    pattern: /DIMENSIONS/
};

export default createToken(DIMENSIONS);