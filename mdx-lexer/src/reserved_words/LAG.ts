import { ITokenConfig , createToken } from "chevrotain";

const LAG: ITokenConfig = {
    name: "LAG key word",
    label: "lag",
    pattern: /LAG/
};

export default createToken(LAG);