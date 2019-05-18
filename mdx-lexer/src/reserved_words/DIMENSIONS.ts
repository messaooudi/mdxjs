import { ITokenConfig , createToken } from "chevrotain";

const DIMENSIONS: ITokenConfig = {
    name: "DIMENSIONS key word",
    label: "dimensions",
    pattern: /DIMENSIONS/
};

export default createToken(DIMENSIONS);