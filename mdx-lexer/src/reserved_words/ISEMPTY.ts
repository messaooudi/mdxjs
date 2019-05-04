import { ITokenConfig , createToken } from "chevrotain";

const ISEMPTY: ITokenConfig = {
    label: "ISEMPTY key word",
    name: "is empty",
    pattern: /ISEMPTY/
};

export default createToken(ISEMPTY);