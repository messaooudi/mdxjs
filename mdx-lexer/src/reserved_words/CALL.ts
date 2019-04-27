import { ITokenConfig , createToken } from "chevrotain";

const CALL: ITokenConfig = {
    label: "CALL key word",
    name: "call",
    pattern: /CALL/
};

export default createToken(CALL);