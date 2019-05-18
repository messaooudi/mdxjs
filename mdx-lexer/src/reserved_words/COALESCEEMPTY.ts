import { ITokenConfig , createToken } from "chevrotain";

const COALESCEEMPTY: ITokenConfig = {
    name: "COALESCEEMPTY key word",
    label: "coalesce empty",
    pattern: /COALESCEEMPTY/
};

export default createToken(COALESCEEMPTY);