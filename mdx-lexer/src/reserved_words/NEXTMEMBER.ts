import { ITokenConfig , createToken } from "chevrotain";

const NEXTMEMBER: ITokenConfig = {
    name: "NEXTMEMBER key word",
    label: "next member",
    pattern: /NEXTMEMBER/
};

export default createToken(NEXTMEMBER);