import { ITokenConfig , createToken } from "chevrotain";

const LASTPERIODS: ITokenConfig = {
    name: "LASTPERIODS key word",
    label: "last periods",
    pattern: /LASTPERIODS/
};

export default createToken(LASTPERIODS);