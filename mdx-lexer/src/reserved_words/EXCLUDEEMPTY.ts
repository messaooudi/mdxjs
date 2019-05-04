import { ITokenConfig , createToken } from "chevrotain";

const EXCLUDEEMPTY: ITokenConfig = {
    label: "EXCLUDEEMPTY key word",
    name: "exclude empty",
    pattern: /EXCLUDEEMPTY/
};

export default createToken(EXCLUDEEMPTY);