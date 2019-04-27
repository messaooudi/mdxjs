import { ITokenConfig , createToken } from "chevrotain";

const HIERARCHIZE: ITokenConfig = {
    label: "HIERARCHIZE key word",
    name: "hirearchize",
    pattern: /HIERARCHIZE/
};

export default createToken(HIERARCHIZE);