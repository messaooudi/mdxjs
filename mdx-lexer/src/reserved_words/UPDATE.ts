import { ITokenConfig } from "chevrotain"

const UPDATE: ITokenConfig = {
    label: "UPDATE key word",
    name: "update",
    pattern: /UPDATE/
};

export default createToken(UPDATE);