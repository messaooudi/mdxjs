import { ITokenConfig , createToken } from "chevrotain";

const ISLEAF: ITokenConfig = {
    name: "ISLEAF key word",
    label: "is leaf",
    pattern: /ISLEAF/
};

export default createToken(ISLEAF);