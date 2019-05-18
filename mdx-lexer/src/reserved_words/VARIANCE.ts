import { ITokenConfig , createToken } from "chevrotain";

const VARIANCE: ITokenConfig = {
    name: "VARIANCE key word",
    label: "variance",
    pattern: /VARIANCE/
};

export default createToken(VARIANCE);