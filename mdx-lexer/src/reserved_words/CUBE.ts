import { ITokenConfig , createToken } from "chevrotain";

const CUBE: ITokenConfig = {
    name: "CUBE",
    label: "cube",
    pattern: /CUBE/
};

export default createToken(CUBE);