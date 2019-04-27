import { ITokenConfig , createToken } from "chevrotain";

const VALUE: ITokenConfig = {
    label: "VALUE key word",
    name: "value",
    pattern: /VALUE/
};

export default createToken(VALUE);