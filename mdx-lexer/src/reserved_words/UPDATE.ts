import { ITokenConfig , createToken } from "chevrotain";

const UPDATE: ITokenConfig = {
    name: "UPDATE",
    label: "update",
    pattern: /UPDATE/
};

export default createToken(UPDATE);