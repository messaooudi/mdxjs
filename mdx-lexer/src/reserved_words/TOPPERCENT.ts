import { ITokenConfig , createToken } from "chevrotain";

const TOPPERCENT: ITokenConfig = {
    label: "TOPPERCENT key word",
    name: "top percent",
    pattern: /TOPPERCENT/
};

export default createToken(TOPPERCENT);