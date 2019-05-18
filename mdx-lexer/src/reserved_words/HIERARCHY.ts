import { ITokenConfig , createToken } from "chevrotain";

const HIERARCHY: ITokenConfig = {
    name: "HIERARCHY",
    label: "hierarchy",
    pattern: /HIERARCHY/
};

export default createToken(HIERARCHY);