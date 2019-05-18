import { ITokenConfig , createToken } from "chevrotain";

const USE: ITokenConfig = {
    name: "USE key word",
    label: "use",
    pattern: /USE/
};

export default createToken(USE);