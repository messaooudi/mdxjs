import { ITokenConfig , createToken } from "chevrotain";

const ANCESTORS: ITokenConfig = {
    name: "ANCESTORS",
    label: "ancestors",
    pattern: /ANCESTORS/
};

export default createToken(ANCESTORS);