import { ITokenConfig , createToken } from "chevrotain";

const STDDEVP: ITokenConfig = {
    label: "STDDEVP key word",
    name: "stddevp",
    pattern: /STDDEVP/
};

export default createToken(STDDEVP);