import { ITokenConfig } from "chevrotain"

const MEMBERTOSTR: ITokenConfig = {
    label: "MEMBERTOSTR key word",
    name: "member to string",
    pattern: /MEMBERTOSTR/
};

export default createToken(MEMBERTOSTR);