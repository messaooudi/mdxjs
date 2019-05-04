import { ITokenConfig , createToken } from "chevrotain";

const HIERARCHY: ITokenConfig = {
    label: "HIERARCHY key word",
    name: "hierarchy",
    pattern: /HIERARCHY/
};

export default createToken(HIERARCHY);