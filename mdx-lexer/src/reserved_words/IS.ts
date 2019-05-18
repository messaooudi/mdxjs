import { ITokenConfig , createToken } from "chevrotain";

const IS: ITokenConfig = {
    name: "IS key word",
    label: "is",
    pattern: /IS/
};

export default createToken(IS);