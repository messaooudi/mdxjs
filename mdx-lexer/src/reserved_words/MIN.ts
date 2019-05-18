import { ITokenConfig , createToken } from "chevrotain";

const MIN: ITokenConfig = {
    name: "MIN key word",
    label: "min",
    pattern: /MIN/
};

export default createToken(MIN);