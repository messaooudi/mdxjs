import { ITokenConfig } from "chevrotain"

const EMPTY: ITokenConfig = {
    label: "EMPTY key word",
    name: "empty",
    pattern: /EMPTY/
};

export default createToken(EMPTY);