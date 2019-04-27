import { ITokenConfig , createToken } from "chevrotain";

const VARP: ITokenConfig = {
    label: "VARP key word",
    name: "varp",
    pattern: /VARP/
};

export default createToken(VARP);