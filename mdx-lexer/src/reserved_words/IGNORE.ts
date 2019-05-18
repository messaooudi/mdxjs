import { ITokenConfig , createToken } from "chevrotain";

const IGNORE: ITokenConfig = {
    name: "IGNORE key word",
    label: "ignore",
    pattern: /IGNORE/
};

export default createToken(IGNORE);