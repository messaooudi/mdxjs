import { ITokenConfig } from "chevrotain"

const MTD: ITokenConfig = {
    label: "MTD key word",
    name: "mtd",
    pattern: /MTD/
};

export default createToken(MTD);