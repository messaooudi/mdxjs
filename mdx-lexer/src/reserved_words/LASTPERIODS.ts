import { ITokenConfig , createToken } from "chevrotain";

const LASTPERIODS: ITokenConfig = {
    name: "LASTPERIODS",
    label: "last periods",
    pattern: /LASTPERIODS/
};

export default createToken(LASTPERIODS);