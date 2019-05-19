import { ITokenConfig , createToken } from "chevrotain";

const VARIANCE: ITokenConfig = {
    name: "VARIANCE",
    label: "variance",
    pattern: /VARIANCE/
};

export default createToken(VARIANCE);