import { ITokenConfig , createToken } from "chevrotain";

const VARIANCEP: ITokenConfig = {
    name: "VARIANCEP key word",
    label: "variancep",
    pattern: /VARIANCEP/
};

export default createToken(VARIANCEP);