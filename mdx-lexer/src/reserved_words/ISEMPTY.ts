import { ITokenConfig , createToken } from "chevrotain";

const ISEMPTY: ITokenConfig = {
    name: "ISEMPTY key word",
    label: "is empty",
    pattern: /ISEMPTY/
};

export default createToken(ISEMPTY);