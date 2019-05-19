import { ITokenConfig , createToken } from "chevrotain";

const USE: ITokenConfig = {
    name: "USE",
    label: "use",
    pattern: /USE/
};

export default createToken(USE);