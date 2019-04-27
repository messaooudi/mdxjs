import { ITokenConfig } from "chevrotain"

const SETTOSTR: ITokenConfig = {
    label: "SETTOSTR key word",
    name: "set to string",
    pattern: /SETTOSTR/
};

export default createToken(SETTOSTR);