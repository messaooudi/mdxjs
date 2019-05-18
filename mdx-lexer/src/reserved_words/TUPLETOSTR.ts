import { ITokenConfig , createToken } from "chevrotain";

const TUPLETOSTR: ITokenConfig = {
    name: "TUPLETOSTR",
    label: "tuple to string",
    pattern: /TUPLETOSTR/
};

export default createToken(TUPLETOSTR);