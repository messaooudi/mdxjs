import { ITokenConfig , createToken } from "chevrotain";

const TUPLETOSTR: ITokenConfig = {
    label: "TUPLETOSTR key word",
    name: "tuple to string",
    pattern: /TUPLETOSTR/
};

export default createToken(TUPLETOSTR);