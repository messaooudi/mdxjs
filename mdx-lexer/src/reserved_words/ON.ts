import { ITokenConfig , createToken } from "chevrotain";

const ON: ITokenConfig = {
    name: "ON key word",
    label: "on",
    pattern: /ON/
};

export default createToken(ON);