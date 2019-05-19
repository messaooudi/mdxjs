import { ITokenConfig, createToken } from "chevrotain";

const CONCATENATION: ITokenConfig = {
    name: "CONCATENATION",
    label: "concatenation",
    pattern: /\+/,
};

export default createToken(CONCATENATION);