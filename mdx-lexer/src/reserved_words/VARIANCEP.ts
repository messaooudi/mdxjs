import { ITokenConfig , createToken } from "chevrotain";

const VARIANCEP: ITokenConfig = {
    label: "VARIANCEP key word",
    name: "variancep",
    pattern: /VARIANCEP/
};

export default createToken(VARIANCEP);