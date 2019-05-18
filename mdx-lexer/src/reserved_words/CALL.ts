import { ITokenConfig , createToken } from "chevrotain";

const CALL: ITokenConfig = {
    name: "CALL",
    label: "call",
    pattern: /CALL/
};

export default createToken(CALL);