import { ITokenConfig , createToken } from "chevrotain";

const PERIODSTODATE: ITokenConfig = {
    label: "PERIODSTODATE key word",
    name: "periods to date",
    pattern: /PERIODSTODATE/
};

export default createToken(PERIODSTODATE);