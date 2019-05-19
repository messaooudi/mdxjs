import { ITokenConfig , createToken } from "chevrotain";

const TOPPERCENT: ITokenConfig = {
    name: "TOPPERCENT",
    label: "top percent",
    pattern: /TOPPERCENT/
};

export default createToken(TOPPERCENT);