import { ITokenConfig } from "chevrotain"

const LAG: ITokenConfig = {
    label: "LAG key word",
    name: "lag",
    pattern: /LAG/
};

export default createToken(LAG);