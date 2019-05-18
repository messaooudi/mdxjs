import { ITokenConfig , createToken } from "chevrotain";

const STRTOTUPLE: ITokenConfig = {
    name: "STRTOTUPLE key word",
    label: "string to tuple",
    pattern: /STRTOTUPLE/
};

export default createToken(STRTOTUPLE);