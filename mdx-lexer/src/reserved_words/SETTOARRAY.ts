import { ITokenConfig , createToken } from "chevrotain";

const SETTOARRAY: ITokenConfig = {
    label: "SETTOARRAY key word",
    name: "set to array",
    pattern: /SETTOARRAY/
};

export default createToken(SETTOARRAY);