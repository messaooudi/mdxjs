import { ITokenConfig } from "chevrotain"

const BASC: ITokenConfig = {
    label: "BASC key word",
    name: "basc",
    pattern: /BASC/
};

export default createToken(BASC);