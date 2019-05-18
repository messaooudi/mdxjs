import { ITokenConfig , createToken } from "chevrotain";

const USERNAME: ITokenConfig = {
    name: "USERNAME key word",
    label: "username",
    pattern: /USERNAME/
};

export default createToken(USERNAME);