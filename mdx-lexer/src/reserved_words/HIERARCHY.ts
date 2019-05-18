import { ITokenConfig , createToken } from "chevrotain";

const HIERARCHY: ITokenConfig = {
    name: "HIERARCHY key word",
    label: "hierarchy",
    pattern: /HIERARCHY/
};

export default createToken(HIERARCHY);