import { ITokenConfig , createToken } from "chevrotain";

const YTD: ITokenConfig = {
    name: "YTD",
    label: "ytd",
    pattern: /YTD/
};

export default createToken(YTD);