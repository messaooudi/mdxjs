import { ITokenConfig , createToken } from "chevrotain";

const SETTOARRAY: ITokenConfig = {
    name: "SETTOARRAY",
    label: "set to array",
    pattern: /SETTOARRAY/
};

export default createToken(SETTOARRAY);