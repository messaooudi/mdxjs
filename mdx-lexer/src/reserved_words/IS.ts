import { ITokenConfig , createToken } from "chevrotain";

const IS: ITokenConfig = {
    label: "IS key word",
    name: "is",
    pattern: /IS/
};

export default createToken(IS);