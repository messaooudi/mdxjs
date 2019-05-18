import { ITokenConfig , createToken } from "chevrotain";

const SETTOARRAY: ITokenConfig = {
    name: "SETTOARRAY key word",
    label: "set to array",
    pattern: /SETTOARRAY/
};

export default createToken(SETTOARRAY);