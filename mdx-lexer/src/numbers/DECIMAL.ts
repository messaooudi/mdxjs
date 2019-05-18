import { ITokenConfig, createToken } from "chevrotain";

const DECIMAL: ITokenConfig = {
    name: "decimal number",
    label: "decimal",
    pattern: /\d*\.\d+(E(\+|\-)?\d+)?/
};

export default createToken(DECIMAL);