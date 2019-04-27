import { ITokenConfig } from "chevrotain"

const WITH: ITokenConfig = {
    label: "WITH key word",
    name: "with",
    pattern: /WITH/
};

export default createToken(WITH);