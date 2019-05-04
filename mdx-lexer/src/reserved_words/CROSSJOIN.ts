import { ITokenConfig , createToken } from "chevrotain";

const CROSSJOIN: ITokenConfig = {
    label: "CROSSJOIN key word",
    name: "cross join",
    pattern: /CROSSJOIN/
};

export default createToken(CROSSJOIN);