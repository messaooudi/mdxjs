import { ITokenConfig , createToken } from "chevrotain";

const HIDDEN: ITokenConfig = {
    label: "HIDDEN key word",
    name: "hidden",
    pattern: /HIDDEN/
};

export default createToken(HIDDEN);