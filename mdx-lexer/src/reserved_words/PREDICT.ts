import { ITokenConfig , createToken } from "chevrotain";

const PREDICT: ITokenConfig = {
    name: "PREDICT key word",
    label: "predict",
    pattern: /PREDICT/
};

export default createToken(PREDICT);