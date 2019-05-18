import { ITokenConfig , createToken } from "chevrotain";

const VARP: ITokenConfig = {
    name: "VARP",
    label: "varp",
    pattern: /VARP/
};

export default createToken(VARP);