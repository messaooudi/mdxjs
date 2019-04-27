import { ITokenConfig } from "chevrotain"

const STRTOMEMBER: ITokenConfig = {
    label: "STRTOMEMBER key word",
    name: "string to member",
    pattern: /STRTOMEMBER/
};

export default createToken(STRTOMEMBER);