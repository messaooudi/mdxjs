import { ITokenConfig , createToken } from "chevrotain";

const AFTER: ITokenConfig = {
    name: "AFTER",
    label: "after",
    pattern: /AFTER/
};

export default createToken(AFTER);