import { ITokenConfig , createToken } from "chevrotain";

const IGNORE: ITokenConfig = {
    label: "IGNORE key word",
    name: "ignore",
    pattern: /IGNORE/
};

export default createToken(IGNORE);