import { ITokenConfig , createToken } from "chevrotain";

const SETTOSTR: ITokenConfig = {
    name: "SETTOSTR key word",
    label: "set to string",
    pattern: /SETTOSTR/
};

export default createToken(SETTOSTR);