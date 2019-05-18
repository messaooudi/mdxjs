import { ITokenConfig , createToken } from "chevrotain";

const MEMBERTOSTR: ITokenConfig = {
    name: "MEMBERTOSTR key word",
    label: "member to string",
    pattern: /MEMBERTOSTR/
};

export default createToken(MEMBERTOSTR);