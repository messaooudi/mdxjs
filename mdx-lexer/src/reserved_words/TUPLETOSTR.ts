import { ITokenConfig , createToken } from "chevrotain";

const TUPLETOSTR: ITokenConfig = {
    name: "TUPLETOSTR key word",
    label: "tuple to string",
    pattern: /TUPLETOSTR/
};

export default createToken(TUPLETOSTR);