import { ITokenConfig , createToken } from "chevrotain";

const BY: ITokenConfig = {
    name: "BY",
    label: "by",
    pattern: /BY/
};

export default createToken(BY);