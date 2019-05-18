import { ITokenConfig , createToken } from "chevrotain";

const TRUE: ITokenConfig = {
    name: "TRUE key word",
    label: "true",
    pattern: /TRUE/
};

export default createToken(TRUE);