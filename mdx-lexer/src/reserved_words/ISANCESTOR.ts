import { ITokenConfig , createToken } from "chevrotain";

const ISANCESTOR: ITokenConfig = {
    name: "ISANCESTOR",
    label: "is ancestor",
    pattern: /ISANCESTOR/
};

export default createToken(ISANCESTOR);