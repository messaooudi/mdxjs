import { ITokenConfig , createToken } from "chevrotain";

const VALUE: ITokenConfig = {
    name: "VALUE key word",
    label: "value",
    pattern: /VALUE/
};

export default createToken(VALUE);