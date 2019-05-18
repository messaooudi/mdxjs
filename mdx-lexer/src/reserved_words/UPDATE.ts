import { ITokenConfig , createToken } from "chevrotain";

const UPDATE: ITokenConfig = {
    name: "UPDATE key word",
    label: "update",
    pattern: /UPDATE/
};

export default createToken(UPDATE);