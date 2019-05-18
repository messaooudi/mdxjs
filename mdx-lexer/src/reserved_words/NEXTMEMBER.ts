import { ITokenConfig , createToken } from "chevrotain";

const NEXTMEMBER: ITokenConfig = {
    name: "NEXTMEMBER",
    label: "next member",
    pattern: /NEXTMEMBER/
};

export default createToken(NEXTMEMBER);