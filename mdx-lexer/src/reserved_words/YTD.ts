import { ITokenConfig } from "chevrotain"

const YTD: ITokenConfig = {
    label: "YTD key word",
    name: "ytd",
    pattern: /YTD/
};

export default createToken(YTD);