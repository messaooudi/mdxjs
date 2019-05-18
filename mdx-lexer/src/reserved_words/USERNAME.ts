import { ITokenConfig , createToken } from "chevrotain";

const USERNAME: ITokenConfig = {
    name: "USERNAME",
    label: "username",
    pattern: /USERNAME/
};

export default createToken(USERNAME);