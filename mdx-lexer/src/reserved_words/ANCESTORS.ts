import { ITokenConfig } from "chevrotain"

const ANCESTORS: ITokenConfig = {
    label: "ANCESTORS key word",
    name: "ancestors",
    pattern: /ANCESTORS/
};

export default createToken(ANCESTORS);