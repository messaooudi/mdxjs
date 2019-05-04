import { ITokenConfig , createToken } from "chevrotain";

const SESSION: ITokenConfig = {
    label: "SESSION key word",
    name: "session",
    pattern: /SESSION/
};

export default createToken(SESSION);