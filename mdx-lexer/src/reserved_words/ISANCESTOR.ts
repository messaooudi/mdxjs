import { ITokenConfig , createToken } from "chevrotain";

const ISANCESTOR: ITokenConfig = {
    label: "ISANCESTOR key word",
    name: "is ancestor",
    pattern: /ISANCESTOR/
};

export default createToken(ISANCESTOR);