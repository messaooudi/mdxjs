import { ITokenConfig , createToken } from "chevrotain";

const WITH: ITokenConfig = {
    name: "WITH key word",
    label: "with",
    pattern: /WITH/
};

export default createToken(WITH);