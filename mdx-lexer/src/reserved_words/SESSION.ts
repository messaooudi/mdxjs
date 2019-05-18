import { ITokenConfig , createToken } from "chevrotain";

const SESSION: ITokenConfig = {
    name: "SESSION key word",
    label: "session",
    pattern: /SESSION/
};

export default createToken(SESSION);