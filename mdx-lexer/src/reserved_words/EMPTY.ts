import { ITokenConfig , createToken } from "chevrotain";

const EMPTY: ITokenConfig = {
    name: "EMPTY",
    label: "empty",
    pattern: /EMPTY/
};

export default createToken(EMPTY);