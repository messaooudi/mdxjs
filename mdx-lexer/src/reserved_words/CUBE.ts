import { ITokenConfig , createToken } from "chevrotain";

const CUBE: ITokenConfig = {
    name: "CUBE key word",
    label: "cube",
    pattern: /CUBE/
};

export default createToken(CUBE);