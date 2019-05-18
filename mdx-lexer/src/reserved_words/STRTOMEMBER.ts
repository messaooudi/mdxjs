import { ITokenConfig , createToken } from "chevrotain";

const STRTOMEMBER: ITokenConfig = {
    name: "STRTOMEMBER key word",
    label: "string to member",
    pattern: /STRTOMEMBER/
};

export default createToken(STRTOMEMBER);