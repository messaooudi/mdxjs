import { ITokenConfig , createToken } from "chevrotain";

const ANCESTORS: ITokenConfig = {
    name: "ANCESTORS key word",
    label: "ancestors",
    pattern: /ANCESTORS/
};

export default createToken(ANCESTORS);