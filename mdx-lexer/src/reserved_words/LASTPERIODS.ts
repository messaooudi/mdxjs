import { ITokenConfig , createToken } from "chevrotain";

const LASTPERIODS: ITokenConfig = {
    label: "LASTPERIODS key word",
    name: "last periods",
    pattern: /LASTPERIODS/
};

export default createToken(LASTPERIODS);