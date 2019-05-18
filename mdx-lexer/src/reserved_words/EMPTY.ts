import { ITokenConfig , createToken } from "chevrotain";

const EMPTY: ITokenConfig = {
    name: "EMPTY key word",
    label: "empty",
    pattern: /EMPTY/
};

export default createToken(EMPTY);