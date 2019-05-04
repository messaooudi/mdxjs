import { ITokenConfig , createToken } from "chevrotain";

const MAX: ITokenConfig = {
    label: "MAX key word",
    name: "max",
    pattern: /MAX/
};

export default createToken(MAX);