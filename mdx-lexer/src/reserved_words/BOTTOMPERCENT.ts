import { ITokenConfig , createToken } from "chevrotain";

const BOTTOMPERCENT: ITokenConfig = {
    name: "BOTTOMPERCENT key word",
    label: "bottom precent",
    pattern: /BOTTOMPERCENT/
};

export default createToken(BOTTOMPERCENT);