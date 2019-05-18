import { ITokenConfig , createToken } from "chevrotain";

const COALESCEEMPTY: ITokenConfig = {
    name: "COALESCEEMPTY",
    label: "coalesce empty",
    pattern: /COALESCEEMPTY/
};

export default createToken(COALESCEEMPTY);