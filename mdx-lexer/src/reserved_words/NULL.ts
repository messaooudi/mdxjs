import { ITokenConfig , createToken } from "chevrotain";

const NULL: ITokenConfig = {
    label: "NULL key word",
    name: "null",
    pattern: /NULL/
};

export default createToken(NULL);