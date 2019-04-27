import { ITokenConfig , createToken } from "chevrotain";

const VARIANCE: ITokenConfig = {
    label: "VARIANCE key word",
    name: "variance",
    pattern: /VARIANCE/
};

export default createToken(VARIANCE);