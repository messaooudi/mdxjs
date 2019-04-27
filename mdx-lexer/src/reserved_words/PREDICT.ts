import { ITokenConfig } from "chevrotain"

const PREDICT: ITokenConfig = {
    label: "PREDICT key word",
    name: "predict",
    pattern: /PREDICT/
};

export default createToken(PREDICT);