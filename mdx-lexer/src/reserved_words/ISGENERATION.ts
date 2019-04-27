import { ITokenConfig , createToken } from "chevrotain";

const ISGENERATION: ITokenConfig = {
    label: "ISGENERATION key word",
    name: "is generation",
    pattern: /ISGENERATION/
};

export default createToken(ISGENERATION);