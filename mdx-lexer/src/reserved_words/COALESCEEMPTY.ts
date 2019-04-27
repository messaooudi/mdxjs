import { ITokenConfig } from "chevrotain"

const COALESCEEMPTY: ITokenConfig = {
    label: "COALESCEEMPTY key word",
    name: "coalesce empty",
    pattern: /COALESCEEMPTY/
};

export default createToken(COALESCEEMPTY);