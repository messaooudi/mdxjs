import { ITokenConfig , createToken } from "chevrotain";

const EXCLUDEEMPTY: ITokenConfig = {
    name: "EXCLUDEEMPTY key word",
    label: "exclude empty",
    pattern: /EXCLUDEEMPTY/
};

export default createToken(EXCLUDEEMPTY);