import { ITokenConfig , createToken } from "chevrotain";

const HIERARCHIZE: ITokenConfig = {
    name: "HIERARCHIZE",
    label: "hirearchize",
    pattern: /HIERARCHIZE/
};

export default createToken(HIERARCHIZE);