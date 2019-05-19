import { ITokenConfig , createToken } from "chevrotain";

const IGNORE: ITokenConfig = {
    name: "IGNORE",
    label: "ignore",
    pattern: /IGNORE/
};

export default createToken(IGNORE);