import { ITokenConfig , createToken } from "chevrotain";

const TRUE: ITokenConfig = {
    name: "TRUE",
    label: "true",
    pattern: /TRUE/
};

export default createToken(TRUE);