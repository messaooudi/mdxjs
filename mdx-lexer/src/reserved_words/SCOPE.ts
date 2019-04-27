import { ITokenConfig } from "chevrotain"

const SCOPE: ITokenConfig = {
    label: "SCOPE key word",
    name: "scope",
    pattern: /SCOPE/
};

export default createToken(SCOPE);