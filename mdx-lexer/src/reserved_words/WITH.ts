import { ITokenConfig , createToken } from "chevrotain";

const WITH: ITokenConfig = {
    name: "WITH",
    label: "with",
    pattern: /WITH/
};

export default createToken(WITH);