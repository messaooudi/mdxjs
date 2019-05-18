import { ITokenConfig , createToken } from "chevrotain";

const STDDEVP: ITokenConfig = {
    name: "STDDEVP key word",
    label: "stddevp",
    pattern: /STDDEVP/
};

export default createToken(STDDEVP);