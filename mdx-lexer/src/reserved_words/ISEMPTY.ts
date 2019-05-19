import { ITokenConfig , createToken } from "chevrotain";

const ISEMPTY: ITokenConfig = {
    name: "ISEMPTY",
    label: "is empty",
    pattern: /ISEMPTY/
};

export default createToken(ISEMPTY);