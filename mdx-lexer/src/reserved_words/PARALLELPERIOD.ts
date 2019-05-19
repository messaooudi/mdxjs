import { ITokenConfig , createToken } from "chevrotain";

const PARALLELPERIOD: ITokenConfig = {
    name: "PARALLELPERIOD",
    label: "parallel period",
    pattern: /PARALLELPERIOD/
};

export default createToken(PARALLELPERIOD);