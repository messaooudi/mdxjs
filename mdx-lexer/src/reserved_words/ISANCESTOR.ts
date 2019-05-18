import { ITokenConfig , createToken } from "chevrotain";

const ISANCESTOR: ITokenConfig = {
    name: "ISANCESTOR key word",
    label: "is ancestor",
    pattern: /ISANCESTOR/
};

export default createToken(ISANCESTOR);