import { ITokenConfig , createToken } from "chevrotain";

const PROPERTY: ITokenConfig = {
    label: "PROPERTY key word",
    name: "property",
    pattern: /PROPERTY/
};

export default createToken(PROPERTY);