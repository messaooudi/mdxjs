import { ITokenConfig } from "chevrotain"

const RANK: ITokenConfig = {
    label: "RANK key word",
    name: "rank",
    pattern: /RANK/
};

export default createToken(RANK);