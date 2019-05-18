import { ITokenConfig , createToken } from "chevrotain";

const CALL: ITokenConfig = {
    name: "CALL key word",
    label: "call",
    pattern: /CALL/
};

export default createToken(CALL);