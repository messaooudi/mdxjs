import { ITokenConfig , createToken } from "chevrotain";

const NO_PROPERTIES: ITokenConfig = {
    name: "NO_PROPERTIES key word",
    label: "no properties",
    pattern: /NO_PROPERTIES/
};

export default createToken(NO_PROPERTIES);