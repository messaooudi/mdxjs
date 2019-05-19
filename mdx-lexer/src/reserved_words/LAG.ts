import { ITokenConfig , createToken } from "chevrotain";

const LAG: ITokenConfig = {
    name: "LAG",
    label: "lag",
    pattern: /LAG/
};

export default createToken(LAG);