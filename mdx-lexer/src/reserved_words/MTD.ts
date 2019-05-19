import { ITokenConfig , createToken } from "chevrotain";

const MTD: ITokenConfig = {
    name: "MTD",
    label: "mtd",
    pattern: /MTD/
};

export default createToken(MTD);