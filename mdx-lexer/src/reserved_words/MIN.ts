import { ITokenConfig , createToken } from "chevrotain";

const MIN: ITokenConfig = {
    name: "MIN",
    label: "min",
    pattern: /MIN/
};

export default createToken(MIN);