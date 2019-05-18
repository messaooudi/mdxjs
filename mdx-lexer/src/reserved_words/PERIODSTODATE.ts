import { ITokenConfig , createToken } from "chevrotain";

const PERIODSTODATE: ITokenConfig = {
    name: "PERIODSTODATE key word",
    label: "periods to date",
    pattern: /PERIODSTODATE/
};

export default createToken(PERIODSTODATE);