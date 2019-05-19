import { ITokenConfig , createToken } from "chevrotain";

const BOTTOMPERCENT: ITokenConfig = {
    name: "BOTTOMPERCENT",
    label: "bottom precent",
    pattern: /BOTTOMPERCENT/
};

export default createToken(BOTTOMPERCENT);