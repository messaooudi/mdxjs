import { ITokenConfig , createToken } from "chevrotain";

const INDEX: ITokenConfig = {
    name: "INDEX",
    label: "index",
    pattern: /INDEX/
};

export default createToken(INDEX);