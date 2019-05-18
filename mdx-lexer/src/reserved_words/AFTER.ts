import { ITokenConfig , createToken } from "chevrotain";

const AFTER: ITokenConfig = {
    name: "AFTER key word",
    label: "after",
    pattern: /AFTER/
};

export default createToken(AFTER);