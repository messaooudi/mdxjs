import { ITokenConfig , createToken } from "chevrotain";

const SCOPE: ITokenConfig = {
    name: "SCOPE",
    label: "scope",
    pattern: /SCOPE/
};

export default createToken(SCOPE);