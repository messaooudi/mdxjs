import { ITokenConfig , createToken } from "chevrotain";

const VARIANCEP: ITokenConfig = {
    name: "VARIANCEP",
    label: "variancep",
    pattern: /VARIANCEP/
};

export default createToken(VARIANCEP);