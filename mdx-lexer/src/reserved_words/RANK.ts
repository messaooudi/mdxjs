import { ITokenConfig , createToken } from "chevrotain";

const RANK: ITokenConfig = {
    name: "RANK key word",
    label: "rank",
    pattern: /RANK/
};

export default createToken(RANK);