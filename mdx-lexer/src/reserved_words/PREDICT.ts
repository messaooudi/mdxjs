import { ITokenConfig , createToken } from "chevrotain";

const PREDICT: ITokenConfig = {
    name: "PREDICT",
    label: "predict",
    pattern: /PREDICT/
};

export default createToken(PREDICT);