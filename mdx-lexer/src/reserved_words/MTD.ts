import { ITokenConfig , createToken } from "chevrotain";

const MTD: ITokenConfig = {
    name: "MTD key word",
    label: "mtd",
    pattern: /MTD/
};

export default createToken(MTD);