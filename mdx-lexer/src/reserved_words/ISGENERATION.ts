import { ITokenConfig , createToken } from "chevrotain";

const ISGENERATION: ITokenConfig = {
    name: "ISGENERATION",
    label: "is generation",
    pattern: /ISGENERATION/
};

export default createToken(ISGENERATION);