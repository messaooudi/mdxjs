import { ITokenConfig , createToken } from "chevrotain";

const CROSSJOIN: ITokenConfig = {
    name: "CROSSJOIN key word",
    label: "cross join",
    pattern: /CROSSJOIN/
};

export default createToken(CROSSJOIN);