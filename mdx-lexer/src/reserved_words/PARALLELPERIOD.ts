import { ITokenConfig } from "chevrotain"

const PARALLELPERIOD: ITokenConfig = {
    label: "PARALLELPERIOD key word",
    name: "parallel period",
    pattern: /PARALLELPERIOD/
};

export default createToken(PARALLELPERIOD);