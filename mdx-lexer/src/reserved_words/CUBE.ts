import { ITokenConfig , createToken } from "chevrotain";

const CUBE: ITokenConfig = {
    label: "CUBE key word",
    name: "cube",
    pattern: /CUBE/
};

export default createToken(CUBE);