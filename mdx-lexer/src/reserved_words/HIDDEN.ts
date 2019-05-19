import { ITokenConfig , createToken } from "chevrotain";

const HIDDEN: ITokenConfig = {
    name: "HIDDEN",
    label: "hidden",
    pattern: /HIDDEN/
};

export default createToken(HIDDEN);