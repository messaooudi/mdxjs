import { ITokenConfig , createToken } from "chevrotain";

const WTD: ITokenConfig = {
    name: "WTD key word",
    label: "wtd",
    pattern: /WTD/
};

export default createToken(WTD);