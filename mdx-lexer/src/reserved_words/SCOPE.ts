import { ITokenConfig , createToken } from "chevrotain";

const SCOPE: ITokenConfig = {
    name: "SCOPE key word",
    label: "scope",
    pattern: /SCOPE/
};

export default createToken(SCOPE);