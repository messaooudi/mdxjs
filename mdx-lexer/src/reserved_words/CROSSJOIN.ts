import { ITokenConfig , createToken } from "chevrotain";

const CROSSJOIN: ITokenConfig = {
    name: "CROSSJOIN",
    label: "cross join",
    pattern: /CROSSJOIN/
};

export default createToken(CROSSJOIN);