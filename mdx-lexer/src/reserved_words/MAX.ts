import { ITokenConfig , createToken } from "chevrotain";

const MAX: ITokenConfig = {
    name: "MAX key word",
    label: "max",
    pattern: /MAX/
};

export default createToken(MAX);