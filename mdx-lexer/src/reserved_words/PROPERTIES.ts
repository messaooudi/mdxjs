import { ITokenConfig , createToken } from "chevrotain";

const PROPERTIES: ITokenConfig = {
    name: "PROPERTIES",
    label: "properties",
    pattern: /PROPERTIES/
};

export default createToken(PROPERTIES);