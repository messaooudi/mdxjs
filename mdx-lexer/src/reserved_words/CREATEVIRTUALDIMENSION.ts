import { ITokenConfig , createToken } from "chevrotain";

const CREATEVIRTUALDIMENSION: ITokenConfig = {
    name: "CREATEVIRTUALDIMENSION",
    label: "create virtual dimension",
    pattern: /CREATEVIRTUALDIMENSION/
};

export default createToken(CREATEVIRTUALDIMENSION);