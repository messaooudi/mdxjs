import { ITokenConfig , createToken } from "chevrotain";

const NULL: ITokenConfig = {
    name: "NULL key word",
    label: "null",
    pattern: /NULL/
};

export default createToken(NULL);