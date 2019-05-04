import { ITokenConfig, createToken } from "chevrotain";

const DECIMAL: ITokenConfig = {
    label: "decimal number",
    name: "decimal",
    pattern: /\d*\.\d+(E(\+|\-)?\d+)?/
};

export default createToken(DECIMAL);