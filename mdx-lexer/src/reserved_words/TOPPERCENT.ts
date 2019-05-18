import { ITokenConfig , createToken } from "chevrotain";

const TOPPERCENT: ITokenConfig = {
    name: "TOPPERCENT key word",
    label: "top percent",
    pattern: /TOPPERCENT/
};

export default createToken(TOPPERCENT);