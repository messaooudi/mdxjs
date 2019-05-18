import { ITokenConfig, createToken } from "chevrotain";

const CONCATENATION: ITokenConfig = {
    name: "CONCATENATION operator",
    label: "concatenation",
    pattern: /\+/,
};

export default createToken(CONCATENATION);