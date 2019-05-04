import { ITokenConfig , createToken } from "chevrotain";

const BY: ITokenConfig = {
    label: "BY key word",
    name: "by",
    pattern: /BY/
};

export default createToken(BY);