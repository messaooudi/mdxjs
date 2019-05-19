import { ITokenConfig , createToken } from "chevrotain";

const FOR: ITokenConfig = {
    name: "FOR",
    label: "for",
    pattern: /FOR/
};

export default createToken(FOR);