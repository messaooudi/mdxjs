import { ITokenConfig , createToken } from "chevrotain";

const UNIQUE: ITokenConfig = {
    name: "UNIQUE",
    label: "unique",
    pattern: /UNIQUE/
};

export default createToken(UNIQUE);