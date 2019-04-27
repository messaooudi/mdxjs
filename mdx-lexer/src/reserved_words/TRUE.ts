import { ITokenConfig , createToken } from "chevrotain";

const TRUE: ITokenConfig = {
    label: "TRUE key word",
    name: "true",
    pattern: /TRUE/
};

export default createToken(TRUE);