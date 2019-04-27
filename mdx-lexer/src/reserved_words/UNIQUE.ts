import { ITokenConfig } from "chevrotain"

const UNIQUE: ITokenConfig = {
    label: "UNIQUE key word",
    name: "unique",
    pattern: /UNIQUE/
};

export default createToken(UNIQUE);