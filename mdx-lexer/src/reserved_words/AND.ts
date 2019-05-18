import { ITokenConfig , createToken } from "chevrotain";

const AND: ITokenConfig = {
    name: "AND key word",
    label: "and",
    pattern: /AND/
};

export default createToken(AND);