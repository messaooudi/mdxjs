import { ITokenConfig, createToken } from "chevrotain";

const CONCATENATION: ITokenConfig = {
    label: "CONCATENATION operator",
    name: "concatenation",
    pattern: /\+/,
};

export default createToken(CONCATENATION);