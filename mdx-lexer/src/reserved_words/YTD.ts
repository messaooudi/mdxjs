import { ITokenConfig , createToken } from "chevrotain";

const YTD: ITokenConfig = {
    name: "YTD key word",
    label: "ytd",
    pattern: /YTD/
};

export default createToken(YTD);