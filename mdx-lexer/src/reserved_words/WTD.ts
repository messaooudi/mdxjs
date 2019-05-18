import { ITokenConfig , createToken } from "chevrotain";

const WTD: ITokenConfig = {
    name: "WTD",
    label: "wtd",
    pattern: /WTD/
};

export default createToken(WTD);