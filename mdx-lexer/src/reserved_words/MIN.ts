import { ITokenConfig } from "chevrotain"

const MIN: ITokenConfig = {
    label: "MIN key word",
    name: "min",
    pattern: /MIN/
};

export default createToken(MIN);