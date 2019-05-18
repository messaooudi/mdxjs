import { ITokenConfig , createToken } from "chevrotain";

const PROPERTIES: ITokenConfig = {
    name: "PROPERTIES key word",
    label: "properties",
    pattern: /PROPERTIES/
};

export default createToken(PROPERTIES);