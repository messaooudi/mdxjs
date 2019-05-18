import { ITokenConfig , createToken } from "chevrotain";

const UNIQUE: ITokenConfig = {
    name: "UNIQUE key word",
    label: "unique",
    pattern: /UNIQUE/
};

export default createToken(UNIQUE);