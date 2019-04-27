import { ITokenConfig , createToken } from "chevrotain";

const WTD: ITokenConfig = {
    label: "WTD key word",
    name: "wtd",
    pattern: /WTD/
};

export default createToken(WTD);