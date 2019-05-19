import { ITokenConfig , createToken } from "chevrotain";

const ON: ITokenConfig = {
    name: "ON",
    label: "on",
    pattern: /ON/
};

export default createToken(ON);