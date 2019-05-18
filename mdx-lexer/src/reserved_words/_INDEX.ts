import { ITokenConfig , createToken } from "chevrotain";

const INDEX: ITokenConfig = {
    name: "INDEX key word",
    label: "index",
    pattern: /INDEX/
};

export default createToken(INDEX);