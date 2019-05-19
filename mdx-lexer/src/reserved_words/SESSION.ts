import { ITokenConfig , createToken } from "chevrotain";

const SESSION: ITokenConfig = {
    name: "SESSION",
    label: "session",
    pattern: /SESSION/
};

export default createToken(SESSION);