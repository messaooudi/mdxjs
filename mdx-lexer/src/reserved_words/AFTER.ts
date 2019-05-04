import { ITokenConfig , createToken } from "chevrotain";

const AFTER: ITokenConfig = {
    label: "AFTER key word",
    name: "after",
    pattern: /AFTER/
};

export default createToken(AFTER);