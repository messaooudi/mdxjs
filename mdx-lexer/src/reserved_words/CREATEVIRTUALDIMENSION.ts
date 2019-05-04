import { ITokenConfig , createToken } from "chevrotain";

const CREATEVIRTUALDIMENSION: ITokenConfig = {
    label: "CREATEVIRTUALDIMENSION key word",
    name: "create virtual dimension",
    pattern: /CREATEVIRTUALDIMENSION/
};

export default createToken(CREATEVIRTUALDIMENSION);