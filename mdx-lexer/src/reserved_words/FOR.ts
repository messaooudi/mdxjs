import { ITokenConfig } from "chevrotain"

const FOR: ITokenConfig = {
    label: "FOR key word",
    name: "for",
    pattern: /FOR/
};

export default createToken(FOR);