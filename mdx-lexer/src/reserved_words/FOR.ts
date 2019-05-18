import { ITokenConfig , createToken } from "chevrotain";

const FOR: ITokenConfig = {
    name: "FOR key word",
    label: "for",
    pattern: /FOR/
};

export default createToken(FOR);