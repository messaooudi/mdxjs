import { ITokenConfig , createToken } from "chevrotain";

const USE: ITokenConfig = {
    label: "USE key word",
    name: "use",
    pattern: /USE/
};

export default createToken(USE);