import { ITokenConfig , createToken } from "chevrotain";

const BY: ITokenConfig = {
    name: "BY key word",
    label: "by",
    pattern: /BY/
};

export default createToken(BY);