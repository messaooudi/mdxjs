import { ITokenConfig , createToken } from "chevrotain";

const ISLEAF: ITokenConfig = {
    name: "ISLEAF",
    label: "is leaf",
    pattern: /ISLEAF/
};

export default createToken(ISLEAF);