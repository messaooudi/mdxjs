import { ITokenConfig , createToken } from "chevrotain";

const PROPERTIES: ITokenConfig = {
    label: "PROPERTIES key word",
    name: "properties",
    pattern: /PROPERTIES/
};

export default createToken(PROPERTIES);