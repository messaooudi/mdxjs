import { ITokenConfig , createToken } from "chevrotain";

const BOTTOMPERCENT: ITokenConfig = {
    label: "BOTTOMPERCENT key word",
    name: "bottom precent",
    pattern: /BOTTOMPERCENT/
};

export default createToken(BOTTOMPERCENT);