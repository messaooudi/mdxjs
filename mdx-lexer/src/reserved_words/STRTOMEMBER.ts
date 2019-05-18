import { ITokenConfig , createToken } from "chevrotain";

const STRTOMEMBER: ITokenConfig = {
    name: "STRTOMEMBER",
    label: "string to member",
    pattern: /STRTOMEMBER/
};

export default createToken(STRTOMEMBER);