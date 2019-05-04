import { ITokenConfig , createToken } from "chevrotain";

const INDEX: ITokenConfig = {
    label: "INDEX key word",
    name: "index",
    pattern: /INDEX/
};

export default createToken(INDEX);