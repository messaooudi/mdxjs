import { ITokenConfig , createToken } from "chevrotain";

const ON: ITokenConfig = {
    label: "ON key word",
    name: "on",
    pattern: /ON/
};

export default createToken(ON);