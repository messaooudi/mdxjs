import { ITokenConfig , createToken } from "chevrotain";

const STDDEVP: ITokenConfig = {
    name: "STDDEVP",
    label: "stddevp",
    pattern: /STDDEVP/
};

export default createToken(STDDEVP);