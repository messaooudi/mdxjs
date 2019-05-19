import { ITokenConfig , createToken } from "chevrotain";

const PROPERTY: ITokenConfig = {
    name: "PROPERTY",
    label: "property",
    pattern: /PROPERTY/
};

export default createToken(PROPERTY);