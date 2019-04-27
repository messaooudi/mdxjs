import { ITokenConfig } from "chevrotain"

const NO_PROPERTIES: ITokenConfig = {
    label: "NO_PROPERTIES key word",
    name: "no properties",
    pattern: /NO_PROPERTIES/
};

export default createToken(NO_PROPERTIES);