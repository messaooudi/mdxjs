import { ITokenConfig , createToken } from "chevrotain";

const IS: ITokenConfig = {
    name: "IS",
    label: "is",
    pattern: /IS/
};

export default createToken(IS);