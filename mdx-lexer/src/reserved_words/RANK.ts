import { ITokenConfig , createToken } from "chevrotain";

const RANK: ITokenConfig = {
    name: "RANK",
    label: "rank",
    pattern: /RANK/
};

export default createToken(RANK);