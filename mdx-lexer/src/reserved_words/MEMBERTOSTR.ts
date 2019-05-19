import { ITokenConfig , createToken } from "chevrotain";

const MEMBERTOSTR: ITokenConfig = {
    name: "MEMBERTOSTR",
    label: "member to string",
    pattern: /MEMBERTOSTR/
};

export default createToken(MEMBERTOSTR);