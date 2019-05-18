import { ITokenConfig , createToken } from "chevrotain";

const HIERARCHIZE: ITokenConfig = {
    name: "HIERARCHIZE key word",
    label: "hirearchize",
    pattern: /HIERARCHIZE/
};

export default createToken(HIERARCHIZE);