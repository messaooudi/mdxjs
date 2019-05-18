import { ITokenConfig , createToken } from "chevrotain";

const VARP: ITokenConfig = {
    name: "VARP key word",
    label: "varp",
    pattern: /VARP/
};

export default createToken(VARP);