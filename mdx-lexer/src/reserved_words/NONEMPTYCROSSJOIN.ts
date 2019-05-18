import { ITokenConfig , createToken } from "chevrotain";

const NONEMPTYCROSSJOIN: ITokenConfig = {
    name: "NONEMPTYCROSSJOIN key word",
    label: "non empty crossjoin",
    pattern: /NONEMPTYCROSSJOIN/
};

export default createToken(NONEMPTYCROSSJOIN);