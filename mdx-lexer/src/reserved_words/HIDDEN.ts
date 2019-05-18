import { ITokenConfig , createToken } from "chevrotain";

const HIDDEN: ITokenConfig = {
    name: "HIDDEN key word",
    label: "hidden",
    pattern: /HIDDEN/
};

export default createToken(HIDDEN);