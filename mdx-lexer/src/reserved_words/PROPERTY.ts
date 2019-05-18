import { ITokenConfig , createToken } from "chevrotain";

const PROPERTY: ITokenConfig = {
    name: "PROPERTY key word",
    label: "property",
    pattern: /PROPERTY/
};

export default createToken(PROPERTY);