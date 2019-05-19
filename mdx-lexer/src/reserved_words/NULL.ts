import { ITokenConfig , createToken } from "chevrotain";

const NULL: ITokenConfig = {
    name: "NULL",
    label: "null",
    pattern: /NULL/
};

export default createToken(NULL);