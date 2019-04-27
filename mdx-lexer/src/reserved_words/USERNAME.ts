import { ITokenConfig } from "chevrotain"

const USERNAME: ITokenConfig = {
    label: "USERNAME key word",
    name: "username",
    pattern: /USERNAME/
};

export default createToken(USERNAME);